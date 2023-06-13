import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stepper } from ".";
import { Box } from "@mui/material";

export default {
  title: "Molecules/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
    <Box sx={{ width: "70%" }}>
  <Stepper {...args} />
    </Box>
);

export const AddPatientStepper = Template.bind({});
AddPatientStepper.args = {
  steps: ["Home", "Covid RTPCR", "Add Patient"],
  activeStep: 0,
};

export const AddLabStepper = Template.bind({});
AddLabStepper.args = {
  steps: ["Lab test", "Select appointment", "Add address", "Review order"],
  activeStep: 0,
};
