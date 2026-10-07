import z from "zod";

export const videoFormats = ["MP4", "MOV", "MKV"] as const;

export const exportSchema = z.object({
	format: z.enum(videoFormats),
});
