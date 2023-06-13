import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Illustration from ".";
import AppStore from "../../../../public/assets/images/AppStore.png"

describe("Illustration Component Testing", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <Illustration image={AppStore} />
    );
    expect(asFragment).toMatchSnapshot;
  });
});
