import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PaymentOptionsCard, { PaymentDetails } from ".";


describe("testing PaymentOptionsCard", () => {
  it("snapshot", () => {
    render(<PaymentOptionsCard
        cardNum="1244 1234 1345 3255"
        cardHolder="Yessie"
        expiryDate="02/25"
        list={PaymentDetails}
      />);
    const paymentoptionCard = screen.getAllByTestId("paymentoption");
    expect(paymentoptionCard.length).toBe(3);
    fireEvent.click(paymentoptionCard[0]);
    expect(screen.getAllByRole('radio')[0]).toBeChecked()
  });

  test("Testing AddCard ", () => {
    const handleClick = jest.fn();

    const {getByTestId} = render(<PaymentOptionsCard
      cardNum="1244 1234 1345 3255"
      cardHolder="Yessie"
      expiryDate="02/25"
      list={PaymentDetails}
    />);
    const addcard = getByTestId("add-card");
    fireEvent.click(addcard);
    expect(handleClick).toHaveBeenCalled;
  });
  
});

  
