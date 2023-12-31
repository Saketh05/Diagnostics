import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Banner } from ".";

export default {
  title: "Molecules/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Banner_ = Template.bind({});
