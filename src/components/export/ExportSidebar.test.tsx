import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoEdit from "@/components/video/VideoEdit";
import { processVideo } from "@/export/processVideo";
import { defaultSchemaValues } from "@/export/schema";

vi.mock("@/export/processVideo", () => {
	return {
		processVideo: vi.fn(),
	};
});

describe("ExportSidebar", () => {
	it("calls processVideo after submitting with default values", async () => {
		const user = userEvent.setup();
		const mockedProcessVideo = vitest.mocked(processVideo);

		render(<VideoEdit />);
		await user.click(screen.getByRole("button", { name: /export/i }));

		expect(mockedProcessVideo).toHaveBeenCalledOnce();
		expect(mockedProcessVideo.mock.calls[0][1]).toStrictEqual(
			defaultSchemaValues,
		); // [0][1] checks the first function call's second parameter
	});
});
