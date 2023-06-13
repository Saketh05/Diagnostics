import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Profile from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <BrowserRouter>
    <Profile {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "Patrik Smith",
  email: "patrik.smith@gmail.com",
  phone: "+12345-10401-123",
};
