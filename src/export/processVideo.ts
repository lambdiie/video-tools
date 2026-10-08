import {
	BlobSource,
	BufferTarget,
	Conversion,
	Input,
	MATROSKA,
	MP4,
	Output,
	QTFF,
	WEBM,
} from "mediabunny";
import type z from "zod";
import type { exportSchema } from "@/export/schema";
import { videoFormats } from "@/export/schema";

export async function processVideo(
	src: File | null,
	data: z.infer<typeof exportSchema>,
	setProgress: (progress: number) => void,
) {
	if (!src) {
		console.error("Error: File not found");
		return;
	}

	const input = new Input({
		formats: [MP4, QTFF, MATROSKA, WEBM],
		source: new BlobSource(src),
	});

	const OutputClass = videoFormats.find(
		(format) => format.format === data.format,
	)?.class;
	if (!OutputClass) {
		console.error("Error: Invalid export form");
		return;
	}

	const output = new Output({
		format: new OutputClass(),
		target: new BufferTarget(),
	});

	const conversion = await Conversion.init({ input, output });
	if (!conversion.isValid) {
		console.error(
			"Error: export could not be initialized: ",
			conversion.discardedTracks,
		);
		return;
	}

	conversion.onProgress = (progress: number) => {
		setProgress(Math.round(progress * 100));
	};

	await conversion.execute();

	const buffer = output.target.buffer;
	if (!buffer) {
		console.error("Error: Output buffer not found");
		return;
	}

	// Create blob with the output buffer
	const blob = new Blob([buffer], { type: output.format.mimeType });
	const url = URL.createObjectURL(blob);

	// Download the file
	const a = document.createElement("a");
	a.href = url;
	a.download = `output.${output.format.fileExtension}`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
