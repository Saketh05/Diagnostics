import React from "react";
import LabSelector from ".";
import { render, screen } from "@testing-library/react";

describe("LabSelector", () => {
  test("renders LabSelector", () => {
    render(<LabSelector  />);
    expect(screen.getByTestId("lab-selector")).toBeInTheDocument;
  });


});
