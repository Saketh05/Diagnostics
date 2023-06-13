import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OtpInputField } from ".";

export default {
  title: "Organisms/OtpInputField",
  component: OtpInputField,
} as ComponentMeta<typeof OtpInputField>;

const Template: ComponentStory<typeof OtpInputField> = () => (
  <OtpInputField
    setOtp={() => {
      console.log("otp is set!");
    }}
  />
);

export const Primary = Template.bind({});
