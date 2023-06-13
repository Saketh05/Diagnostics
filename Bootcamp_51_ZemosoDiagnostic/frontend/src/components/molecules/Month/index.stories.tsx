import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Month from ".";

export default {
    title: "Molecules/Month",
    component: Month,
  } as ComponentMeta<typeof Month>;

  const Template: ComponentStory<typeof Month> = (args) => (
    <Month {...args}/>
  );

  export const Month_Story = Template.bind({});
  Month_Story.args={
      children:"January",
      checked: false
  }  