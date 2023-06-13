import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppointmentSelector } from ".";
import { Box } from "@mui/material";

export default {
  title: "Organisms/AppointmentSelector",
  component: AppointmentSelector,
} as ComponentMeta<typeof AppointmentSelector>;

const Template: ComponentStory<typeof AppointmentSelector> = () => (
  <Box sx={{ width: "600px" }}>
    <AppointmentSelector />
  </Box>
);

export const Primary = Template.bind({});
