import React from "react";
import { DaySelector } from ".";
import { render, screen } from "@testing-library/react";

const day = {
  date: 23,
  day: "Wed",
  selected: true,
};

describe("DaySelector..", () => {
  beforeEach(() => {
    render(<DaySelector {...day} />);
  });
  test("renders DaySelector molecule", () => {
    expect(screen.getByTestId("daySelector")).toBeInTheDocument;
  });
  test("check day and date", () => {
    expect(screen.getByText(day.date)).toBeVisible();
    expect(screen.getByText(day.day)).toBeVisible();
  });
});
