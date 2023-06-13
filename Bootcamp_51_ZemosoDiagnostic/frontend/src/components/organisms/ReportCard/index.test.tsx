import React from "react";
import { render, screen } from "@testing-library/react";

import { ReportCard, ReportCardProps } from "./index";

const reportDetails: ReportCardProps = {
  testName: "Covid RTPCR",
  labName: "Los Altos Center Lab",
  appointmentDate: "02 Feb 2022",
  appointmentTime: "08.30 AM",
  variant: "completed",
};
describe("check completed report card", () => {
  beforeEach(() => {
    render(<ReportCard {...reportDetails} />);
  });
  it("check render of ReportCard", () => {
    const card = screen.getByTestId("reportCard");
    expect(card).toBeInTheDocument();
  });
  it("check report details to be visible", () => {
    expect(screen.getByText(reportDetails.testName)).toBeVisible();
    expect(screen.getByText(reportDetails.labName)).toBeVisible();
    expect(screen.getByTestId("appointmentDate")).toHaveTextContent(
      reportDetails.appointmentDate as string
    );
    expect(screen.getByTestId("appointmentTime")).toHaveTextContent(
      reportDetails.appointmentTime as string
    );
  });
});

describe("check upcoming report card", () => {
  test("checks details of upcoming report card", () => {
    reportDetails.variant = "upcoming";
    render(<ReportCard {...reportDetails} />);
    expect(screen.getByText("Pending")).toBeVisible();
  });
});
