import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import AddPatientDetails, { familylist } from ".";

export default {
  title: "Organisms/AddPatientDetails",
  component: AddPatientDetails,
} as ComponentMeta<typeof AddPatientDetails>;

const Template: ComponentStory<typeof AddPatientDetails> = (args) => (
  <Box sx={{width: "583px", height: "560px"}}>
    <AddPatientDetails {...args} />
   </Box> 
);

export const AddPatientDetails_Story = Template.bind({});
AddPatientDetails_Story.args = {
  list: familylist,
};
