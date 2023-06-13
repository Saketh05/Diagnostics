import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CompanyLogo from "."
export default {
  title: "molecules/CompanyLogo",
  component: CompanyLogo,
} as ComponentMeta<typeof CompanyLogo>;

const Template: ComponentStory<typeof CompanyLogo> = () => (
  <CompanyLogo/>
);

export const companyLogo = Template.bind({});
