import { render, screen } from "@testing-library/react";
import React from "react";
import CreditCard from ".";


describe("ChooseTestCard testing", () => {
    test("renders ChooseTestCard", () => {
        render(
            <CreditCard 
            cardNum="1244 1234 1345 3255"
            cardHolder= "Yessie"
            expiryDate="02/25"  
            />)
        expect(screen.getByText("Sample")).toBeInTheDocument();

    });
});  