/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";

import { PatientCard, PatientCardProps } from "./index";

const patientDetails: PatientCardProps = {
  name: "Peter Smith",
  info: "Self, Male, 30 years",
  handleChange: (_event) => console.log("checkbox changed!"),
  handleEdit: (_event) => console.log("edit button clicked!"),
};

describe("PatientCard test", () => {
  beforeEach(() => {
    render(<PatientCard {...patientDetails} />);
  });
  it("check render of patientCard", () => {
    const patientCard = screen.getByTestId("patientCard");
    expect(patientCard).toBeInTheDocument();
  });
  it("check patientDetails to be visible", () => {
      expect(screen.getByText(patientDetails.name)).toBeVisible();
      expect(screen.getByText(patientDetails.info)).toBeVisible();
  });
});
