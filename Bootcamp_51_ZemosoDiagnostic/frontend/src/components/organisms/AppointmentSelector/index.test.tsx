import React from "react";
import { AppointmentSelector } from ".";
import { render, screen } from "@testing-library/react";

describe("AppointmentSelector", () => {
  beforeEach(() => {
    render(<AppointmentSelector />);
  });
  test("check render of AppointmentSelector organism", () => {
    expect(screen.getByTestId("AppointmentSelector")).toBeInTheDocument;
  });
});
