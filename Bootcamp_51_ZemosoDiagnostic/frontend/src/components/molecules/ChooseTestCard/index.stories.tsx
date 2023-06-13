import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ChooseTestCard from ".";
import bodyTest from './../../../../public/assets/images/bodyTest.png'

export default {
    title: "Molecules/ChooseTestCard",
    component: ChooseTestCard,
  } as ComponentMeta<typeof ChooseTestCard>;
  
  const Template: ComponentStory<typeof ChooseTestCard> = (args) => (
    <ChooseTestCard {...args}/>
  );
  
  export const ChooseTest_Card = Template.bind({});
  ChooseTest_Card.args={
    image: bodyTest,
    title: "Full body checkup",
    priceDesc: "Starting from $1299",
    timeDesc: "Reports ready in 24 Hrs",
    noOfTests: "42 tests",
    action: "View Details"
  }