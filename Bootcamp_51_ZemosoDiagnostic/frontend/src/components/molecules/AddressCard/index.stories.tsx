import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddressCard from ".";
import { Box } from "@mui/material";

export default {
  title: "Molecules/AddressCard",
  component: AddressCard,
} as ComponentMeta<typeof AddressCard>;

const Template: ComponentStory<typeof AddressCard> = (args) => (
  <Box sx={{width: "535px"}}>
    <AddressCard {...args} />{" "}
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Default",
  content: "HOME",
  address: "2235 California Street Mountain View California",
};
