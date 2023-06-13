import React from "react";
import { render, screen } from "@testing-library/react";
import { Banner } from ".";

describe("banner", () => {
  test("renders Banner", () => {
    render(<Banner />);
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });
});
