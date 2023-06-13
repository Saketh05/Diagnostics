import {  Checkbox, FormLabel, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";

export interface CheckBoxLabelProps {
  name: string;
}

const StyledGrid = styled(Grid)`
    display: flex;
    align-items: center;
    color:${theme.palette.text2.main}
`

const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({name}) => {
  return (
    <StyledGrid paddingBottom={"1px"}>
      <Checkbox
        name={name}
        color="secondary"
      />
      <FormLabel data-testid="checkbox-label" sx={{marginTop:"-2px"}}><Typography variant="payment" >{name}</Typography></FormLabel>
    </StyledGrid>
  );
};

export default CheckBoxLabel;
