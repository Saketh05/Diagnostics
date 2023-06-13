import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Tag from ".";
import theme from "../../../Theme/theme";

describe("Tag", () => {
test("Testing Tag ", () => {
  const handleOnClickSelection = jest.fn(()=>{console.log("clicked search")});
  render(<Tag backgroundcolor={theme.palette.purple[800]} color={theme.palette.background1.main} label={"Myself"} handleOnClickSelection={handleOnClickSelection}/>);
  const tag = screen.getByTestId("tag");
  expect(tag).toBeInTheDocument();
  fireEvent.click(tag);
  expect(handleOnClickSelection).toHaveBeenCalledTimes(1);
});
});