import React from "react";
import { AddAddress, AddressDetailsType } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ADDRESS_LABELS, TEXTS } from "../../../Constants";
import { AddressContext } from "../../../store/Store";

describe("AddAddress", () => {
  const AddressValue = {
    address:{
      houseNo: "7-126",
      area: "Abc",
      zipCode: "567282",
      cityState: "Hyderabad Telangana",
    },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAddress: (_value: AddressDetailsType) => {
      // address setter
    },
  };
  beforeEach(() => {
    render(
      <AddressContext.Provider value={AddressValue}>
        <AddAddress />
      </AddressContext.Provider>
    );
  });
  test("check render of AddAddress organism", () => {
    expect(screen.getByTestId("addAddress")).toBeInTheDocument;
    expect(screen.getByText(TEXTS.addAddress)).toBeVisible();
  });
  test("check change in input field", () => {
    const houseNo = "7-126";
    const houseNoInput = screen.getByTestId(ADDRESS_LABELS[0].name);
    fireEvent.change(houseNoInput, { target: { value: houseNo } });
    expect(houseNoInput).toHaveValue(houseNo);
  });
});
