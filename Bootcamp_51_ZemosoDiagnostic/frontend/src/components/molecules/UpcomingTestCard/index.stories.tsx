import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UpcomingTestCard } from ".";
import { Box } from "@mui/material";

export default {
  title: "Molecules/UpcomingTestCard",
  component: UpcomingTestCard,
} as ComponentMeta<typeof UpcomingTestCard>;

const Template: ComponentStory<typeof UpcomingTestCard> = (args) => (
  <Box sx={{ width: "50%" }}>
    <UpcomingTestCard {...args} />
  </Box>
);

export const UpcomingTestCard_ = Template.bind({});
UpcomingTestCard_.args = {
  logoName: "covid",
  testName: "Covid RTPCR",
  labName: "Los Altos Center Lab",
  patientName: "Patrick Smith",
  appointmentSlot: "Wed 23, 7.00 am to 8.00 am",
};
