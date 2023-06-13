import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import WhyChooseUsCard from ".";

export default {
  title: "molecules/WhyChooseUsCard",
  component: WhyChooseUsCard,
} as ComponentMeta<typeof WhyChooseUsCard>;

const Template: ComponentStory<typeof WhyChooseUsCard> = (args) => (
  <WhyChooseUsCard  {...args}/>
);

export const whyChooseUsCard = Template.bind({});

whyChooseUsCard.args = {
    iconName: "home",
    text: "At Home Services"
}