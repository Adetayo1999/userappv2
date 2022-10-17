import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
    it("displays the heading text correctly", () => {
        render(<Header />);
        const headingElement = screen.getByRole("button", {
            name: /Get started for free/i,
        });
        expect(headingElement).toBeInTheDocument();
    });
});
