/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { ADDRESS_LABELS, TEXTS } from "../../../Constants";
import { AddressContext } from "../../../store/Store";
import theme from "../../../Theme/theme";
import CustomTextField from "../../molecules/TextField";

const BoxStyled = styled(Box)`
  box-shadow: 0px 0px 26px 0px rgba(233, 232, 237, 0.5);
  padding: 1.5rem;
  padding-bottom: 8rem;
  border-radius: 0.5rem;
  background-color: ${theme.palette.background1.main};
  & .address {
    color: ${theme.palette.text2.main};
  }
  & .text-fields {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 2rem;
    & .MuiInput-input {
      color: ${theme.palette.text1.main};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
export interface AddressDetailsType {
  userId?: string;
  addressType?: string;
  houseNo: string;
  area: string;
  zipCode: string;
  cityState: string;
}

export const intialAddress: AddressDetailsType = {
  houseNo: "",
  area: "",
  zipCode: "",
  cityState: "",
};

export const AddAddress = () => {
  const {address, setAddress} = useContext(AddressContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };
  return (
    <BoxStyled data-testid="addAddress" id="address-form">
      <Typography variant="subtitle1" className="address">
        {TEXTS.addAddress}
      </Typography>
      <Box className="text-fields">
        {ADDRESS_LABELS.map((addressElement) => (
          <CustomTextField
            label={addressElement.label}
            variant="standard"
            onChange={handleChange}
            name={addressElement.name}
            key={addressElement.name}
            inputProps={{ "data-testid": addressElement.name }}
            value={address[addressElement.name as keyof typeof address] || ""}
          />
        ))}
      </Box>
    </BoxStyled>
  );
};
