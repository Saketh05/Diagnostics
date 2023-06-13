import React from "react";
import MainContent from ".";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("MainContent", () => {
  test("renders MainContent", () => {
    render(
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
    expect(screen.getByTestId("main-content")).toBeInTheDocument;
  });
});
