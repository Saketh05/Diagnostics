import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import SelectPatientCard from ".";


export default {
    title: "Organisms/SelectPatientCard",
    component: SelectPatientCard,
  } as ComponentMeta<typeof SelectPatientCard>;

  const Template: ComponentStory<typeof SelectPatientCard> = (args) => (
    <Box sx={{width: "382px", height:"544px"}}>
      <SelectPatientCard {...args}/>
    </Box>
  );

  export const SelectPatientCard_Story = Template.bind({});
  SelectPatientCard_Story.args={
    title: "Patrick Smith",
    subtitle:"Self, Male, 30 years"
  }