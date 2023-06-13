import { render, screen } from "@testing-library/react";
import React from "react";
import CustomTextField from ".";

describe("Custom Text Field testing", () => {
    test("renders Custom Text Field", () => {
     render(<CustomTextField 
        label="Name"
        variant="standard"
        defaultValue="Patrick"
        />)
        expect(screen.getByTestId(/textField/i)).toBeInTheDocument();

    });
});
