import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxLabel from ".";

export default {
  title: "Molecules/CheckboxLabel",
  component: CheckboxLabel,
} as ComponentMeta<typeof CheckboxLabel>;

const Template: ComponentStory<typeof CheckboxLabel> = (args) => <CheckboxLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: "Save details for future"
};
