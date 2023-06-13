import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RadioButtonWithText from ".";

const mockFunction = jest.fn();
describe("RadioButtionWithText", () => {
  const handleChange = jest.fn();
  test("renders RadioButtionWithText", () => {
    render(
      <RadioButtonWithText
        label="Gender"
        direction={false}
        names={["Male", "Female", "Others"]}
        defaultValue="Male"
        handleChange={mockFunction}
      />
    );
    const femaleRadio = screen.getByRole("radio", {
      name: /female/i,
    });
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    fireEvent.click(femaleRadio);
  });
});
