import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TestimonalCard from ".";

export default {
  title: "Molecules/TestimonalCard",
  component: TestimonalCard,
} as ComponentMeta<typeof TestimonalCard>;

const Template: ComponentStory<typeof TestimonalCard> = (args) => <TestimonalCard {...args} />;

export const testimonalcard = Template.bind({});

testimonalcard.args = {
    name: "John",
    city: "LA",
    review: '"Nice and Healthy"'
};