import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from ".";

export default {
  title: "atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo
    {...args}
  />
);

export const logo = Template.bind({});

logo.args = {
  name: "creditCard",
};
