import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import PaymentOptionsCard, { PaymentDetails } from ".";

export default {
  title: "Organisms/PaymentOptionsCard",
  component: PaymentOptionsCard,
} as ComponentMeta<typeof PaymentOptionsCard>;

const Template: ComponentStory<typeof PaymentOptionsCard> = (args) => (
  <Box sx={{width:"482px"}}>
    <PaymentOptionsCard {...args} />
  </Box>
  
);

export const PaymentOptionsCard_Story = Template.bind({});
PaymentOptionsCard_Story.args = {
  cardNum: "1244 1234 1345 3255",
  cardHolder: "Yessie",
  expiryDate: "02/25",
  cvv: "234",
  list: PaymentDetails
};
