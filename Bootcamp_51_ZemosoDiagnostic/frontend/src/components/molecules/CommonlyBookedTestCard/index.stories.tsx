import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonlyBookedTestCard } from ".";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Molecules/CommonlyBookedTestCard",
  component: CommonlyBookedTestCard,
} as ComponentMeta<typeof CommonlyBookedTestCard>;

const Template: ComponentStory<typeof CommonlyBookedTestCard> = (args) => (
  <Box sx={{ display: "flex" }}>
    <BrowserRouter>
      <CommonlyBookedTestCard {...args} />
    </BrowserRouter>
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  logoName: "covid",
  text: "Covid RTPCR",
};
