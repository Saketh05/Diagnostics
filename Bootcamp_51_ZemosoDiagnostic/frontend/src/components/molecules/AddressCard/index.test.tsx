import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import AddressCard from ".";

describe("AddressCard", () => {
  test("Testing AddressCard ", () => {
    render(
      <AddressCard
        title={"Default"}
        content={"HOME"}
        address={"California"}
        isSelected={false}
      />
    );
    const addresscard = screen.getByTestId("address-card");
    expect(addresscard).toBeInTheDocument();
  });
});
