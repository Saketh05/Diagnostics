import React from "react";
import { render, screen } from "@testing-library/react";
import { MenuItem, MenuItemProps } from ".";
import { BrowserRouter } from "react-router-dom";

const menuItem: MenuItemProps = {
  iconName: "mapPin",
  title: "Track My Orders",
  subHeader: "Track your recent orders & see order status",
  path: "/",
};

describe("Commonly Booked Test Card", () => {
  test("renders MenuItem with subheader", () => {
    render(
      <BrowserRouter>
        <MenuItem {...menuItem} />
      </BrowserRouter>
    );
    const icon = screen.getByTestId(`icon-${menuItem.iconName}`);
    expect(icon).toBeInTheDocument();
    expect(screen.getByText(menuItem.title)).toBeVisible();
    const subHeader = menuItem.subHeader as string;
    expect(screen.getByText(subHeader)).toBeVisible();
  });
  test("renders MenuItem without subheader", () => {
    render(
      <BrowserRouter>
        <MenuItem
          iconName={menuItem.iconName}
          title={menuItem.title}
          path={"/"}
        />
      </BrowserRouter>
    );
    const icon = screen.getByTestId(`icon-${menuItem.iconName}`);
    expect(icon).toBeInTheDocument();
    expect(screen.getByText(menuItem.title)).toBeVisible();
  });
});
