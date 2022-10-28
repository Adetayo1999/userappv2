import { render, screen } from "@testing-library/react";
import { SafelybuyServices } from ".";

describe("Tests on The Safelybuy Services", () => {
    it("tests the title component renders correctly", () => {
        render(<SafelybuyServices />);
        const titleElement = screen.getByText(/our services/i);
        expect(titleElement).toBeInTheDocument();
    });
});
