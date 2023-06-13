import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InstructionCard from ".";

export default {
  title: "Molecules/InstructionCard",
  component: InstructionCard,
} as ComponentMeta<typeof InstructionCard>;

const Template: ComponentStory<typeof InstructionCard> = (args) => <InstructionCard {...args} />;

export const instructionCard = Template.bind({});

instructionCard.args = {
    header: "Instructions",
    content: "Please do not eat or drink for 8 hrs"
};