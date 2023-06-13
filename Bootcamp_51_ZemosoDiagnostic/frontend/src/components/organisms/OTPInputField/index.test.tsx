import React from "react";
import { OtpInputField } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("OtpInputField", () => {
  beforeEach(() => {
    render(
      <OtpInputField
        setOtp={() => {
          console.log("otp is set!");
        }}
      />
    );
  });
  test("check render of OtpInputField organism", () => {
    expect(screen.getByTestId("otpInputField")).toBeInTheDocument;
  });
  test("check change in input field", () => {
    const number = 1;
    const otp1 = screen.getByTestId("otp1");
    fireEvent.change(otp1, { target: { value: number } });
    expect(otp1).toHaveValue(number.toString());
  });
});
