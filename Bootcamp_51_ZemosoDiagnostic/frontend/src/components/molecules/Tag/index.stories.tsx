import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from ".";
import theme from "../../../Theme/theme";

export default {
  title: "molecules/Tag",
  component: Tag,
  argTypes: {
    backgroundColor: {
        control: 'color',
        table: {
          category: 'Colors',
        },
      }
  }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag  {...args}/>
);

export const Tag1 = Template.bind({}); 

Tag1.args = {
    backgroundcolor: theme.palette.purple[800],
    color : theme.palette.background1.main,
    label: "Myself",
    handleOnClickSelection: (label) => {console.log("Clicked "+label)}
  };

