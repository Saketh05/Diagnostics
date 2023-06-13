import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import InstructionCard from ".";

describe("testing instruction card", () => {
  it("snapshot", () => {
    render(<InstructionCard header={"Instructions"}  content={"Nice Test"} />);
    const testimonalcard = screen.getByTestId("instruction-card");
    expect(testimonalcard).toBeInTheDocument();
  });

  it("testing content", () => {
    render(<InstructionCard header={"Instructions"}  content={"Nice Test"} />);
    const icon = screen.getByTestId("icon-arrowDown");
    fireEvent.click(icon);
    const tick = screen.getByTestId("content");
    expect(tick).toBeInTheDocument();
  })
  
});
