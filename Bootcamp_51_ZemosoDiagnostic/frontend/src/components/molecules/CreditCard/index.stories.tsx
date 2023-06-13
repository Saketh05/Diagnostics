import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import CreditCard from ".";

export default {
    title: "Molecules/CreditCard",
    component: CreditCard,
  } as ComponentMeta<typeof CreditCard>;

  const Template: ComponentStory<typeof CreditCard> = (args) => (
    <CreditCard {...args}/>
  );

  export const Credit_Card = Template.bind({});
  Credit_Card.args = {
    cardNum: "1244 1234 1345 3255",
    cardHolder: "Yessie",
    expiryDate: "02/25",
    cvv: "114"
  }
  