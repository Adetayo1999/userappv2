import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
    it("displays the heading text correctly", () => {
        render(<Header />);
        const headingElement = screen.getByRole("heading", {
            name: /header component/i,
        });
        expect(headingElement).toBeInTheDocument();
    });
});
