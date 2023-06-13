import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import RadioButtonWithText from ".";

export default {
  title: "Molecules/RadioButtionWithText",
  component: RadioButtonWithText,
} as ComponentMeta<typeof RadioButtonWithText>;

const Template: ComponentStory<typeof RadioButtonWithText> = () => (
  <RadioButtonWithText label="Gender" direction={true} names={['Male', 'Female', 'Others']} defaultValue="Male" handleChange={()=>{}} />
);

export const RadioButtion_WithText = Template.bind({});
