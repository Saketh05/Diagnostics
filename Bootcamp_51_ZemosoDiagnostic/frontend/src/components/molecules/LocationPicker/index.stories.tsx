import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LocationPicker } from ".";

export default {
  title: "Molecules/LocationPicker",
  component: LocationPicker,
} as ComponentMeta<typeof LocationPicker>;

const Template: ComponentStory<typeof LocationPicker> = (args) => (
  <LocationPicker {...args} />
);

export const Location_Picker = Template.bind({});

Location_Picker.args = {
  location: "Mountain view, CA, USA",
};
