import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import AddCard from ".";

describe("AddCard", () => {
  const setOpen = jest.fn();
  test("Testing AddCard ", () => {
    render(<AddCard open={true} setOpen={setOpen} />);
    const addcard = screen.getByTestId("add-card");
    expect(addcard).toBeInTheDocument();
  });
  test("Working of AddCard form", () => {

    const handleClick = jest.fn();

     const {getByLabelText,getByTestId} = render(<AddCard open={true} setOpen={setOpen} />);

     const cardNum = getByLabelText("Card Number");
     fireEvent.change(cardNum, { target: { value: "1234 1234 1234 1234" } });
     expect(cardNum).toHaveValue("1234 1234 1234 1234");

     const expiryDate = getByLabelText("Expiry Date");
     fireEvent.change(expiryDate, { target: { value: "02/12" } });
     expect(expiryDate).toHaveValue("02/12");

     const cvv = getByLabelText("CVV");
     fireEvent.change(cvv, { target: { value: "234" } });
     expect(cvv).toHaveValue("234");

     const cardHolderName = getByLabelText("Card Holder Name");
     fireEvent.change(cardHolderName, { target: { value: "Yessie" } });
     expect(cardHolderName).toHaveValue("Yessie");

     const addCardBtn = getByTestId("add-card");
     fireEvent.click(addCardBtn);
     expect(handleClick).toHaveBeenCalled;

     const closeBtn = getByTestId("close-btn");
     fireEvent.click(closeBtn);
     expect(handleClick).toHaveBeenCalled;


  });

});
