import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us component test-cases", () => {
    it ("Should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load Button inside contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole('button');
        expect(heading).toBeInTheDocument();
    });

    it("Should load 2 input boxes on the Contact component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
    });
});
