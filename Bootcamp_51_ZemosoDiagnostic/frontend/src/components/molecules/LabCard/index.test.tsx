import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import LabCard from ".";

describe("LabCard", () => {
test("Testing LabCard ", () => {
    render(<LabCard testid="card" labName={"Los Altos Center Lab"} labRating={"4.3"} noOfSlots={"4 Slots Available"} info={"Reports ready in 24 hrs"} cost={"$1200 for 1 Test"} onClick={function (id: string): void {
        throw new Error("Function not implemented.");
    } } active={""} labId={""} />);
    const labCard = screen.getByTestId("card");
    expect(labCard).toBeInTheDocument();
  });
  }); 
