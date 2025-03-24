import Home from "@/app/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Home Component", () => {
    test("renders banner with default text", () => {
        render(<Home />);
        expect(screen.getByText("I love coding!")).toBeInTheDocument();
    });

    test("updates banner text when input is changed", () => {
        render(<Home />);
        const input = screen.getByLabelText(/change banner text/i);
        fireEvent.change(input, { target: { value: "Next.js is awesome!" } });
        expect(screen.getByText("Next.js is awesome!")).toBeInTheDocument();
    });

    test("toggles banner color on button click", () => {
        render(<Home />);
        const button = screen.getByText("Toggle Banner Color");
        const banner = screen.getByText("I love coding!").parentElement;

        // Check initial background color
        expect(banner).toHaveStyle("background-color: rgb(25, 118, 210)"); // #1976d2

        // Click to change color
        fireEvent.click(button);
        expect(banner).toHaveStyle("background-color: rgb(211, 47, 47)"); // #d32f2f

        // Click again to revert color
        fireEvent.click(button);
        expect(banner).toHaveStyle("background-color: rgb(25, 118, 210)"); // #1976d2
    });
});
