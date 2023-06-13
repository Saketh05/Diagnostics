import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import TestDetails from ".";
import { details, testDescription, packageDescription } from "./index";

export default {
  title: "Organisms/TestDetails",
  component: TestDetails,
} as ComponentMeta<typeof TestDetails>;

const Template: ComponentStory<typeof TestDetails> = (args) => (
  <Box sx={{ width: "583px", height: "560px" }}>
    <TestDetails {...args} />
  </Box>
);

export const TestDetails_Story = Template.bind({});
TestDetails_Story.args = {
  featureCards: details,
  title: "Covid RTPCR Test",
  cost: "$1200",
  time: "24",
  testDesc: testDescription,
  packageDesc: packageDescription,
};
