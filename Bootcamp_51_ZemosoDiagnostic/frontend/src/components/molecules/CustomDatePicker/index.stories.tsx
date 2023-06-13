import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDatePicker from ".";

export default {
  title: "molecules/CustomDatePicker",
  component: CustomDatePicker,
} as ComponentMeta<typeof CustomDatePicker>;

const Template: ComponentStory<typeof CustomDatePicker> = (args) => (
  <CustomDatePicker {...args} />
);

export const DatePicker= Template.bind({});

DatePicker.args = {
  label : "Date of Birth",
  handleSelection : (date) => {console.log(date)}
}
