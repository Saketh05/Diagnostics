import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import CompanyLogo from ".";

describe("Icon", () => {
test("Testing CompanyLogo ", () => {
  render(<CompanyLogo />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});
});