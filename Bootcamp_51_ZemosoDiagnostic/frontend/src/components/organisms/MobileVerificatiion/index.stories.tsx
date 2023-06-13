import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MobileVerification from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "organisms/MobileVerification",
  component: MobileVerification,
} as ComponentMeta<typeof MobileVerification>;

const Template: ComponentStory<typeof MobileVerification> = () => (
  <BrowserRouter>
    <MobileVerification />
  </BrowserRouter>
);

export const Primary = Template.bind({});
