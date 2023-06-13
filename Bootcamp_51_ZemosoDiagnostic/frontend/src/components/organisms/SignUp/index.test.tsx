import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SignUp from ".";

describe("SignUp testing", () => {
  test("renders SignUp with all fields fired", () => {
    render(
      <SignUp />
    );
    const testSigUp = screen.getByTestId("SignUp");
    const firstNameField = screen.getByLabelText(/first name/i)
    const lastNameField = screen.getByLabelText(/last name/i)
    const emailField = screen.getByLabelText(/email id/i)
    const testButton = screen.getByRole('button',{name:/continue/i})

    expect(testSigUp).toBeInTheDocument();
    fireEvent.change(firstNameField,{target:{value: "Patrick"}})
    fireEvent.change(lastNameField,{target:{value: "Hugh"}})
    fireEvent.change(emailField,{target:{value: "Patrick@gmail.com"}})
    expect(testButton).toHaveClass("button")
 
    fireEvent.change(firstNameField,{target:{value: ""}})
    expect(testButton).toHaveClass("button buttonState")


  });
  test("renders SignUp with single field fired", () => {
    render(
      <SignUp />
    );
    const testSigUp = screen.getByTestId("SignUp");
    const firstNameField = screen.getByLabelText(/first name/i)
    const testButton = screen.getByRole('button',{name:/continue/i})

    expect(testSigUp).toBeInTheDocument();
    expect(testButton).toHaveClass("button")
 
    fireEvent.change(firstNameField,{target:{value: ""}})
    expect(testButton).toHaveClass("button buttonState")


  });
});