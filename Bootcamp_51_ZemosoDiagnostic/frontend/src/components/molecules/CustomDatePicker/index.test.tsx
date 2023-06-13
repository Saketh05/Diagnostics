import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import CustomDatePicker from ".";

describe("CustomDatePicker", () => {
  test("Testing CustomDatePicker ", () => {
    const handleSelection = jest.fn();
    const { asFragment, getByLabelText } = render(
      <CustomDatePicker
        label={"Date Of Birth"}
        handleSelection={handleSelection}
      />
    );
    expect(asFragment).toMatchSnapshot;

    
  });
});