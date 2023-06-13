import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CheckBoxLabel from "./index";

describe("CheckBoxLabel Component", () => {
  it("should match snapshot", () => {
    const test1 = jest.fn();

    const wrapper = render(
      <CheckBoxLabel name={"Hello"}   />
    );
    expect(wrapper).toBeTruthy;

    expect(wrapper.getByTestId("checkbox-label")).toHaveTextContent("Hello");
  });
});
