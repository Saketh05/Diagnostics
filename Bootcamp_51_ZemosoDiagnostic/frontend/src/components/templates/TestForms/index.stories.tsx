import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestForms from ".";
import {Typography } from "@mui/material";

export default {
  title: "templates/TestForms",
  component: TestForms,
} as ComponentMeta<typeof TestForms>;

const Template: ComponentStory<typeof TestForms> = (args) => (
  <TestForms {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    children: <Typography>Content</Typography>,
};
