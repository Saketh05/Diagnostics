import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TrackYourOrder from ".";

export default {
  title: "Molecules/TrackYourOrder",
  component: TrackYourOrder,
} as ComponentMeta<typeof TrackYourOrder>;

const Template: ComponentStory<typeof TrackYourOrder> = () => <TrackYourOrder />;

export const trackYourOrder = Template.bind({});

