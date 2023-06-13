import { Button } from "@mui/material";
import { render, screen } from "@testing-library/react";
import React from "react";
import Month from ".";
import theme from "../../../Theme/theme";



describe("Month testing", () => {
    test("renders Month with checked true", () => {
        render(
            <Month 
            children="January"
            checked={true}
            />)
        const testButton = screen.getByRole('button',{name:"January"}) 
        expect(testButton).toBeInTheDocument();
        expect(testButton).toHaveStyle({
            background: theme.palette.purple[800],
             color: theme.palette.background1.main
    })

    });

    test("renders Month with checked false", () => {
        render(
            <Month 
            children="January"
            checked={false}
            />)
        const testButton = screen.getByRole('button',{name:"January"}) 
        expect(testButton).toBeInTheDocument();
        expect(testButton).toHaveStyle({
            background: theme.palette.grey[50],
             color: theme.palette.text2.main
    })

    });
}); 