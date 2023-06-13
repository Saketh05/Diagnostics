import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TestimonalCard from ".";

describe("testing icon button", () => {
  it("snapshot", () => {
    render(<TestimonalCard name={"Abby"} city={"LA"} review={"Nice Test"} />);
    const testimonalcard = screen.getByTestId("testimonal-card");
    expect(testimonalcard).toBeInTheDocument();
  });
  
});
