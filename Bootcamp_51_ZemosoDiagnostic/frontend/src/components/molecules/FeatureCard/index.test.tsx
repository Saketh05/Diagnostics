import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FeatureCard from ".";

describe("testing feature-card", () => {
  it("snapshot", () => {
    render(<FeatureCard name="home" text1={"string"} text2={"string"}   />);
    const featureCard = screen.getByTestId("feature-card");
    expect(featureCard).toBeInTheDocument();
  });
  
});
