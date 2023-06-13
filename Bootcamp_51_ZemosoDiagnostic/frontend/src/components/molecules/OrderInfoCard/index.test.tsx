import { render, screen } from "@testing-library/react";
import React from "react";
import OrderInfoCard from ".";
import UserFilled from './../../../../public/assets/icons/userfilled.svg'



describe("OrderInfoCard testing", () => {
    test("renders OrderInfoCard", () => {
        render(
            <OrderInfoCard 
            icon= {<UserFilled />}
            title= "Patrick Smith"
            subtitle="COVID RT-PCR Test"
            />)
        expect(screen.getByText("Patrick Smith")).toBeInTheDocument();

    });
});