import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FeatureCard from ".";

export default {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => <FeatureCard {...args} />;

export const featureCard = Template.bind({});

featureCard.args = {
    name:"home",
    text1: "Home",
    text2: "Visit"
};