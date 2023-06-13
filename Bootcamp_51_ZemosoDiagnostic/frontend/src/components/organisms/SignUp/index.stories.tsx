import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import SignUp from ".";


export default {
    title: "Organisms/SignUp",
    component: SignUp,
  } as ComponentMeta<typeof SignUp>;

  const Template: ComponentStory<typeof SignUp> = () => (
    <Box sx={{width: "382px", height:"544px"}}>
      <SignUp />
    </Box>
  );

  export const SignUp_Story = Template.bind({});
 