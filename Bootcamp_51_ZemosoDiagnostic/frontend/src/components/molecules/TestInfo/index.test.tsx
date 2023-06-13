import React from "react";
import { TestInfo } from ".";
import { render, screen } from "@testing-library/react";

const text = "To check if you have an active COVID-19 infection";

describe("TestInfo", () => {
  test("renders TestInfo molecule", () => {
    render(<TestInfo text={text} />);
    expect(screen.getByTestId("testInfo")).toBeInTheDocument;
    expect(screen.getByText(text)).toBeVisible();
  });
});
