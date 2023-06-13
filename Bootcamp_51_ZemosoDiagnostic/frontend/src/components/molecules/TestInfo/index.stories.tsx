import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestInfo } from ".";
import { Box } from "@mui/material";

export default {
  title: "Molecules/TestInfo",
  component: TestInfo,
} as ComponentMeta<typeof TestInfo>;

const Template: ComponentStory<typeof TestInfo> = (args) => (
  <Box sx={{ width: "163px"}}>
    <TestInfo {...args} />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "To check if you have an active COVID-19 infection",
};
