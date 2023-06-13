import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Primary = Template.bind({});
