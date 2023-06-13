import React from "react";
import { render, screen } from "@testing-library/react";
import { Stepper } from ".";

const stepperContent = {
  steps: ["Lab test", "Select appointment", "Add address", "Review order"],
  activeStep: 0,
};

describe("Stepper", () => {
  beforeEach(() => {
    render(<Stepper {...stepperContent} />);
  });
  test("check stepper to be rendered", () => {
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toBeInTheDocument();
  });
  test("check stepper content to be visible ", () => {
    stepperContent.steps.forEach((step) => {
      expect(screen.getByText(step)).toBeVisible();
    });
  });
});
