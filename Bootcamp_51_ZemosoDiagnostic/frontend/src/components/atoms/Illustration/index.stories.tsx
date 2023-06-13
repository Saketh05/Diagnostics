import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppStore from "../../../../public/assets/images/AppStore.png";
import Illustration from ".";

export default {
  title: "Atoms/Illustration",
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => <Illustration {...args} />;

export const illustration = Template.bind({});

illustration.args = {
  image: AppStore,
 
};