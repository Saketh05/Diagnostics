import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Logo from ".";

const logoName = "covid";

describe("Icon", () => {
test("Testing Logo ", () => {
  render(<Logo name={logoName} />);
  const logo = screen.getByTestId(`logo-${logoName}`);
  expect(logo).toBeInTheDocument();
});
});