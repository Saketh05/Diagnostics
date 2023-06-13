import { Box, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Template_HomePage from ".";
import Footer from "../../molecules/Footer";
import Header from "../../organisms/Header";


export default {
    title: "Templates/Template_HomePage",
    component: Template_HomePage,
  } as ComponentMeta<typeof Template_HomePage>;

  const Template: ComponentStory<typeof Template_HomePage> = (args) => (
    <Template_HomePage {...args} />
  );

  export const Template_HomePage_Story = Template.bind({});
  Template_HomePage_Story.args={
    header: <BrowserRouter><Header /></BrowserRouter>,
    footer: <Footer text1="Home" text2= "Contact us" text3="Privacy policy" text4= "Terms & conditions" />,
    content: <Typography>Content</Typography>
  }