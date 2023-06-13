import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PaymentOption from ".";

export default {
  title: "Molecules/PaymentOption",
  component: PaymentOption,
} as ComponentMeta<typeof PaymentOption>;

const Template: ComponentStory<typeof PaymentOption> = (args) => <PaymentOption {...args} />;

export const primary = Template.bind({});

primary.args = {
  company: "PayPal",
  name:"payPal",
  ischecked: false
};