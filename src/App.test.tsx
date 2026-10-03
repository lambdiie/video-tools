import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App component", () => {
	it("renders App", () => {
		render(<App />);
		expect(screen.getByText(/hey/i)).toBeInTheDocument();
	});
});
