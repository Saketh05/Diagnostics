import {  render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReportsPageContent from ".";
import { recentList } from "../../../Constants";

describe("ReportsPageContent testing", () => {
  test("renders ReportsPageContent", () => {
    render(
      <BrowserRouter>
        <ReportsPageContent recentList={recentList} />
      </BrowserRouter>
    );
    const ReportsPageContentTest = screen.getByText(/upcoming Reports/i);
    expect(ReportsPageContentTest).toBeInTheDocument()
  });
});
