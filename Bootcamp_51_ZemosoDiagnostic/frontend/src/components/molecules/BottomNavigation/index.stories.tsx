/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BottomNavigation from ".";
import { Box, Typography } from "@mui/material";
import theme from "../../../Theme/theme";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Molecules/BottomNavigation",
  component: BottomNavigation,
} as ComponentMeta<typeof BottomNavigation>;

const Template: ComponentStory<typeof BottomNavigation> = (args) => (
  <BrowserRouter>
    <BottomNavigation {...args} />
  </BrowserRouter>
);

export const Variant1 = Template.bind({});
Variant1.args = {
  buttonName: "Select Lab",
  cancelLink: "/",
  buttonLink: "/",
  typo: (
    <Typography variant="button" sx={{ color: theme.palette.text1.main }}>
      1 Patient Selected
    </Typography>
  ),
};

export const Variant2 = Template.bind({});
Variant2.args = {
  buttonName: "Select Lab",
  cancelLink: "/",
  buttonLink: "/",
  typo: (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "4px" }}>
      <Typography variant="overline2" sx={{ color: theme.palette.text2.main }}>
        Los Altos Center Lab
      </Typography>
      <Typography
        variant="button"
        sx={{
          color: theme.palette.text1.main,
          "> span": { color: theme.palette.text3.main },
        }}
      >
        $1200 <Typography variant="overlineR">for 1 Test</Typography>
      </Typography>
    </Box>
  ),
};

export const Variant3 = Template.bind({});
Variant3.args = {
  buttonName: "Add Address",
  buttonLink: "google.com",
};
