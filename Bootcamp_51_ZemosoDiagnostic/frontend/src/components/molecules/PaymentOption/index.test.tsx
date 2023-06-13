import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PaymentOption from ".";

const mockFunc=jest.fn();

describe("testing payment option", () => {
  it("snapshot", () => {
    render(<PaymentOption company={"How can I get the report?"} name="payPal" ischecked={true} onClick={mockFunc} />);
    const paymentoption = screen.getByTestId("paymentoption");
    expect(paymentoption).toBeInTheDocument();
    fireEvent.click(paymentoption);
    expect(mockFunc).toBeCalledTimes(1)
  });
  
});
