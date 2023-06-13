import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LabSelector from ".";

export default {
  title: "organisms/LabSelector",
  component: LabSelector,
} as ComponentMeta<typeof LabSelector>;

const Template: ComponentStory<typeof LabSelector> = () => (
  <LabSelector />
);

export const labCard = Template.bind({});

labCard.args = {}
