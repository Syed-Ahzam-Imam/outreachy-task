import Home from "@/app/page";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Home Component", () => {
    test("renders banner with default text", async () => {
        render(<Home />);
        
        await waitFor(() => {
            expect(screen.getByText("I love building awesome web apps!")).toBeInTheDocument();
        });
    });

    test("updates banner text when input is changed", async () => {
        render(<Home />);
        const input = screen.getByLabelText(/change banner text/i);
        
        fireEvent.change(input, { target: { value: "Next.js is awesome!" } });

        await waitFor(() => {
            expect(screen.getByText("Next.js is awesome!")).toBeInTheDocument();
        });
    });
});
