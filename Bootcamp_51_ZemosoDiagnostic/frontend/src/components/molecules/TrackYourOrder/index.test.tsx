import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import TrackYourOrder from ".";

describe("TrackYourOrder", () => {
test("Testing TrackYourOrder ", () => {

  render(<TrackYourOrder />);
  const trackYourOrderComponent = screen.getByTestId("track-your-order");
  expect(trackYourOrderComponent).toBeInTheDocument();

});
});