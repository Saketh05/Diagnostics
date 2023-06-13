import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
test("Testing header ", () => {
  render(<BrowserRouter><Header/></BrowserRouter>);
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});
}); 