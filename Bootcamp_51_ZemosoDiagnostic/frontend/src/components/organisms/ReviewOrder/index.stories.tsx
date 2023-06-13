import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReviewOrder from ".";

export default {
  title: "Organisms/ReviewOrder",
  component: ReviewOrder,
} as ComponentMeta<typeof ReviewOrder>;

const Template: ComponentStory<typeof ReviewOrder> = (args) => (
  <ReviewOrder {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
  discount: "-$100",
}