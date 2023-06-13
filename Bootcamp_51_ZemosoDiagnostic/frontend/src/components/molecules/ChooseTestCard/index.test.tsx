import { render, screen } from "@testing-library/react";
import React from "react";
import ChooseTestCard from ".";
import bodyTest from './../../../../public/assets/images/bodyTest.png'


describe("ChooseTestCard testing", () => {
    test("renders ChooseTestCard", () => {
        render(
            <ChooseTestCard 
            image= {bodyTest}
            title="Full body checkup"
            priceDesc="Starting from $1299"
            timeDesc="Reports ready in 24 Hrs"
            noOfTests= "42 tests"
            action= "View Details"
        />)
        expect(screen.getByTestId("chooseTestCard")).toBeInTheDocument();

    });
}); 