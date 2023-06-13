import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Authentication } from ".";
import SignUp from "../../organisms/SignUp";

export default {
  title: "Templates/Authentication",
  component: Authentication,
} as ComponentMeta<typeof Authentication>;

const Template: ComponentStory<typeof Authentication> = (args) => (
  <Authentication {...args} />
);

export const AuthenticationTemplate = Template.bind({});

AuthenticationTemplate.args = {
  component: <SignUp />,
};
