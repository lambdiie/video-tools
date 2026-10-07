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
	src: File,
	data: z.infer<typeof exportSchema>,
) {
	const input = new Input({
		formats: [MP4, QTFF, MATROSKA, WEBM],
		source: new BlobSource(src),
	});

	const OutputClass = videoFormats.find(
		(format) => format.format === data.format,
	)?.class;
	if (!OutputClass) {
		console.error("Invalid export format");
		return;
	}

	const output = new Output({
		format: new OutputClass(),
		target: new BufferTarget(),
	});

	const conversion = await Conversion.init({ input, output });
	if (!conversion.isValid) {
		console.error(
			"Error with initializing conversion: ",
			conversion.discardedTracks,
		);
		return;
	}

	conversion.onProgress = (progress: number) => {
		// `progress` is a number between 0 and 1 (inclusive)
	};

	await conversion.execute();

	const buffer = output.target.buffer;
	if (!buffer) {
		console.error("Error with converting video, output buffer not found");
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
