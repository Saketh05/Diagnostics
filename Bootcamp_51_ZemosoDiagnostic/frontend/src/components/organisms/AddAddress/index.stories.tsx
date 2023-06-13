import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AddAddress, AddressDetailsType } from ".";
import { Box } from "@mui/material";
import { AddressContext } from "../../../store/Store";

export default {
  title: "Organisms/AddAddress",
  component: AddAddress,
} as ComponentMeta<typeof AddAddress>;

const AddressValue = {
  address:{
    houseNo: "7-126",
    area: "Abc",
    zipCode: "567282",
    cityState: "Hyderabad Telangana",
  },
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setAddress: (_value: AddressDetailsType) => {
    // address setter
  },
}

const Template: ComponentStory<typeof AddAddress> = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: "40%" }}>
    <AddressContext.Provider value={AddressValue}>
        <AddAddress />
      </AddressContext.Provider>
    </Box>
  </Box>
);

export const Primary = Template.bind({});
