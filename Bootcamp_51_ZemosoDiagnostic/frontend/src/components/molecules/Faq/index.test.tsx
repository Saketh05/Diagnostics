import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Faq from ".";

describe("testing faq", () => {
  it("snapshot", () => {
    render(<Faq question={"How can I get the report?"}  />);
    const faq = screen.getByTestId("faq");
    expect(faq).toBeInTheDocument();
  });
  
});
