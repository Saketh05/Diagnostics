import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddCard from ".";

export default {
  title: "Organisms/AddCard",
  component: AddCard,
} as ComponentMeta<typeof AddCard>;

const Template: ComponentStory<typeof AddCard> = (args) => <AddCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  open: true
};
