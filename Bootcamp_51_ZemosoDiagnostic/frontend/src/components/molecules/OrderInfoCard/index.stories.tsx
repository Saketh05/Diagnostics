import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import OrderInfoCard from '.';
import UserFilled from './../../../../public/assets/icons/userfilled.svg'

export default {
    title: "Molecules/OrderInfoCard",
    component: OrderInfoCard,
  } as ComponentMeta<typeof OrderInfoCard>;

  const Template: ComponentStory<typeof OrderInfoCard> = (args) => (
    <OrderInfoCard  {...args}/>
  );

  export const OrderInfo_Card = Template.bind({});
  OrderInfo_Card.args={
    icon: <UserFilled />,
    title: "Patrick Smith",
    subtitle: "COVID RT-PCR Test"
  }  