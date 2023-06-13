import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import SearchBox from ".";

describe("SearchBox", () => {
test("Testing SearchBox ", () => {
  render(<SearchBox/>);
  const searchbox = screen.getByTestId("search-box");
  expect(searchbox).toBeInTheDocument();
});
}); 