import { stripExtension } from "@/lib/utils";

describe("stripExtension", () => {
  it("strips extension", () => {
    const fileName = "test.mp4"
    const strippedFile = stripExtension(fileName);

    expect(strippedFile).toBe("test");
  });

  it("strips extension with multiple periods", () => {
    const fileName = "file.test.mp4"
    const strippedFile = stripExtension(fileName);

    expect(strippedFile).toBe("file.test");
  });

  it("returns name without extension", () => {
    const fileName = "test"
    const strippedFile = stripExtension(fileName);

    expect(strippedFile).toBe("test");
  });
});
