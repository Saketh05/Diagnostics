import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuItem } from ".";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Molecules/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <Box sx={{ width: "569px" }}>
    <BrowserRouter>
      <MenuItem {...args} />
    </BrowserRouter>
  </Box>
);

export const MenuItemWithSubHeader = Template.bind({});
MenuItemWithSubHeader.args = {
  iconName: "users",
  title: "My Family & Friends",
  subHeader: "Manage & view family members & reports",
};

export const MenuItemWithOutSubHeader = Template.bind({});
MenuItemWithOutSubHeader.args = {
  iconName: "fileFilled",
  title: "Terms & conditions",
};
