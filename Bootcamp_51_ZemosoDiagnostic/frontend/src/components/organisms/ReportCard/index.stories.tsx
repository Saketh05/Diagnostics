import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReportCard } from ".";
import { Box } from "@mui/material";

export default {
  title: "Organisms/ReportCard",
  component: ReportCard,
} as ComponentMeta<typeof ReportCard>;

const Template: ComponentStory<typeof ReportCard> = (args) => (
  <Box sx={{ width: "583px" }}>
    <ReportCard {...args} />
  </Box>
);

export const Completed = Template.bind({});
Completed.args = {
  testName: "Covid RTPCR",
  labName: "Los Altos Center Lab",
  appointmentDate: "02 Feb 2022",
  appointmentTime: "08.30 AM",
  variant: "completed",
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  testName: "Covid RTPCR",
  labName: "Los Altos Center Lab",
  variant: "upcoming",
};
