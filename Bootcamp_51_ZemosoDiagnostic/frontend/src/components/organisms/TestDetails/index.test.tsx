import { render, screen } from "@testing-library/react";
import React from "react";
import TestDetails, { details, packageDescription, testDescription } from ".";


describe("TestDetails testing", () => {
  test("renders TestDetails", () => {
    render(
      <TestDetails
        featureCards={details}
        title="Covid RTPCR Test"
        cost="$1200"
        time="24"
        testDesc={testDescription}
        packageDesc={packageDescription}
      />
    );
    const TestDetailsTest = screen.getByText(/To check if you have an active COVID-19 infection/i);
    expect(TestDetailsTest).toBeInTheDocument();
  });
});
