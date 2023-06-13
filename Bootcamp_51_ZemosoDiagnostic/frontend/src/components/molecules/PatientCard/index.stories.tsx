/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PatientCard } from ".";
import { Box } from "@mui/material";

export default {
  title: "Molecules/PatientCard",
  component: PatientCard,
} as ComponentMeta<typeof PatientCard>;

const Template: ComponentStory<typeof PatientCard> = (args) => (
  <Box sx={{ width: "50%" }}>
    <PatientCard {...args} />
  </Box>
);

export const PatientCard_ = Template.bind({});
PatientCard_.args = {
  name: "Peter Smith",
  info: "Self, Male, 30 years",
  handleChange: (_event) => console.log("checkbox changed!"),
  handleEdit: (_event) => console.log("edit button clicked!"),
};
