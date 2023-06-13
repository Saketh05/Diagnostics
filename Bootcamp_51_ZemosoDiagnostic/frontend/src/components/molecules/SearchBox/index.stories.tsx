import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBox from ".";

export default {
  title: "molecules/SearchBox",
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = () => (
  <SearchBox />
);

export const searchBox = Template.bind({});