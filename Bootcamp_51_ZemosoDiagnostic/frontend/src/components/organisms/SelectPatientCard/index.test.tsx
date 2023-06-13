import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SelectPatientCard from ".";

const mockFunction = jest.fn();
describe("SelectPatientCard", () => {
  test("renders SelectPatientCard", () => {
    render(
      <SelectPatientCard
        id={1}
        title={"Patrick"}
        subtitle={"Self, Male, 30 years"}
        handleChange={mockFunction}
      />
    );
    const checkBoxTest = screen.getByRole("checkbox");
    expect(checkBoxTest).toBeInTheDocument();

    fireEvent.click(checkBoxTest);
    expect(checkBoxTest).toBeChecked();
  });
});
