import React from "react";
import { render, screen } from "@testing-library/react";

import { UpcomingTestCard, UpcomingTestCardProps } from "./index";

const testDetails: UpcomingTestCardProps = {
  logoName: "covid",
  testName: "Covid RTPCR",
  labName: "Los Altos Center Lab",
  patientName: "Patrick Smith",
  appointmentSlot: "Wed 23, 7.00 am to 8.00 am",
};
describe("UpcomingTestCard test", () => {
  beforeEach(() => {
    render(<UpcomingTestCard {...testDetails} />);
  });
  it("check render of UpcomingTestCard", () => {
    const card = screen.getByTestId("upcomingTestCard");
    expect(card).toBeInTheDocument();
  });
  it("check render of logo", () => {
    expect(
      screen.getByTestId(`logo-${testDetails.logoName}`)
    ).toBeInTheDocument();
  });
  it("check patientDetails to be visible", () => {
    expect(screen.getByText(`${testDetails.testName}-`)).toBeVisible();
    expect(screen.getByText(testDetails.labName)).toBeVisible();
    expect(screen.getByText(testDetails.patientName)).toBeVisible();
    expect(screen.getByText(testDetails.appointmentSlot)).toBeVisible();
  });
});
