import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Footer from ".";
import { Logos } from "../../../Constants";


export default {
    title: "Molecules/Footer",
    component: Footer,
  } as ComponentMeta<typeof Footer>;

  const Template: ComponentStory<typeof Footer> = (args) => (
    <Footer {...args}/>
  );

  export const Footer_Story = Template.bind({});
  Footer_Story.args={   
        text1:"Home",
        text2: "Contact us",
        text3: "Privacy policy",
        text4: "Terms & conditions",
  } 