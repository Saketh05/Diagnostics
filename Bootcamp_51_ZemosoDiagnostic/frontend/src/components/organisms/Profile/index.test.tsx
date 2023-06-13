import React from "react";
import Profile from ".";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const iconName = "arrowDown";

describe("Profile", () => {
  test("renders Profile", () => {
    render(
      <BrowserRouter>
        <Profile
          name="Patrik Smith"
          email="patrik.smith@gmail.com"
          phone="+1 132-749"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("profile")).toBeInTheDocument;
  });
});
