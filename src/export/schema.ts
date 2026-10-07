import { MkvOutputFormat, MovOutputFormat, Mp4OutputFormat, WebMOutputFormat } from "mediabunny";
import z from "zod";

export const videoFormats = [
	{ format: "MP4", class: Mp4OutputFormat },
	{ format: "MOV", class: MovOutputFormat },
	{ format: "MKV", class: MkvOutputFormat },
	{ format: "WEBM", class: WebMOutputFormat },
] as const;

export const exportSchema = z.object({
	format: z.enum(videoFormats.map(format => format.format)),
});
