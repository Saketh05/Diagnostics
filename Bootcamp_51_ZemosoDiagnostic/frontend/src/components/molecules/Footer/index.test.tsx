import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from ".";
import theme from "../../../Theme/theme";

describe("Footer testing", () => {
  test("renders Footer", () => {
    render(
      <Footer
        text1="Home"
        text2="Contact us"
        text3="Privacy policy"
        text4="Terms & conditions"
      />
    );
    const testFooter = screen.getByText("Home");
    expect(testFooter).toBeInTheDocument();
  });
});
