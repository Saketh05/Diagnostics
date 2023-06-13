import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddPatientDetails, { familylist } from ".";
import userEvent from '@testing-library/user-event';

describe("AddPatientDetails testing", () => {
  test("renders AddPatientDetails",  () => {
    render(
        <AddPatientDetails list={familylist} />

    );
    const MyselfButton =screen.getByRole('button', {
        name: /myself/i
    })

    fireEvent.click(MyselfButton)


  });
});
