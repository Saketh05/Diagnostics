import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import MobileVerification from ".";
import { BrowserRouter } from "react-router-dom";

describe("MobileVerification", () => {
  test("Testing MobileVerification ", () => {
    render(
      <BrowserRouter>
        <MobileVerification />
      </BrowserRouter>
    );
    const mobileverification = screen.getByTestId("mobile-verification");
    expect(mobileverification).toBeInTheDocument();
  });
});
