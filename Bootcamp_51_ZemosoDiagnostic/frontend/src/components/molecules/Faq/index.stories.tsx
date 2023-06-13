import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Faq from ".";

export default {
  title: "Molecules/Faq",
  component: Faq,
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => <Faq {...args} />;

export const faq1 = Template.bind({});

faq1.args = {
    question: "How can I get the report?",

};