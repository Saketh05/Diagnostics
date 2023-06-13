import React from "react";
import { render, screen } from "@testing-library/react";
import { LocationPicker } from ".";

const location = "Mountain view, CA, USA";

describe("LocationPicker", () => {
  test("renders locationPicker", () => {
    render(<LocationPicker location={location} />);
    expect(screen.getByTestId(`locationPicker`)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeVisible();
  });
});
