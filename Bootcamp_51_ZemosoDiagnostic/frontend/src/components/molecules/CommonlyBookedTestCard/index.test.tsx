import React from "react";
import { render, screen } from "@testing-library/react";
import { CommonlyBookedTestCard, CommonlyBookedTestCardProps } from ".";
import { BrowserRouter } from "react-router-dom";

const commonTest: CommonlyBookedTestCardProps = {
  logoName: "kidney",
  text: "Kidney Function Test",
  path: "/",
};

describe("Commonly Booked Test Card", () => {
  test("renders CommonlyBookedTestCard", () => {
    render(
      <BrowserRouter>
        <CommonlyBookedTestCard
          logoName={commonTest.logoName}
          text={commonTest.text}
          path={""}
        />
      </BrowserRouter>
    );
    const logo = screen.getByTestId(`logo-${commonTest.logoName}`);
    expect(logo).toBeInTheDocument();
    expect(screen.getByText(commonTest.text)).toBeVisible();
  });
});
