import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ReviewOrder from ".";

describe("testing  ReviewOrder", () => {
  it("snapshot", () => {
    render(<ReviewOrder discount={"100"} />);
    const review = screen.getByTestId("review-order");
    expect(review).toBeInTheDocument();
  });
  
});
