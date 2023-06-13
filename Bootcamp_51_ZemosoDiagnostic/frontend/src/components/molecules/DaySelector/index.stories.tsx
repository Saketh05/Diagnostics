import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DaySelector } from ".";

export default {
  title: "Molecules/DaySelector",
  component: DaySelector,
} as ComponentMeta<typeof DaySelector>;

const Template: ComponentStory<typeof DaySelector> = (args) => (
  <DaySelector {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  date: 23,
  day: "Wed",
  selected: true,
};
