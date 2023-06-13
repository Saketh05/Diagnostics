import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import WhyChooseUsCard from ".";

describe("WhyChooseUsCard", () => {
test("Testing WhyChooseUsCard ", () => {
  render(<WhyChooseUsCard iconName={"home"} text={"At Home Services"}/>);
  const whyChooseUsCard = screen.getByTestId("card");
  expect(whyChooseUsCard).toBeInTheDocument();
});
}); 