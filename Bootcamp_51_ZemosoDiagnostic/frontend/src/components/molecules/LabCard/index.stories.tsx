import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LabCard from ".";

export default {
  title: "molecules/LabCard",
  component: LabCard,
} as ComponentMeta<typeof LabCard>;

const Template: ComponentStory<typeof LabCard> = (args) => (
  <LabCard {...args}/>
);

export const labCard = Template.bind({});

labCard.args = {
  labName: "Los Altos Center Lab",
  labRating:  "4.3",
  noOfSlots:  "4 Slots Available",
  info: "Reports ready in 24 hrs",
  cost: "$1200 for 1 Test",

} 
