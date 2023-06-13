import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";

const BoxStyled = styled(Box)`
  border-bottom: 1px solid ${theme.palette.grey1[200]};
  display: flex;
  align-items: center;
  max-width: 282px;
  gap: 3px;
  & .text {
    flex-grow: 3;
    color: ${theme.palette.text1.main};
  }
`;
interface LocationPickerProps {
  location: string;
}
export const LocationPicker = ({ location }: LocationPickerProps) => {
  return (
    <BoxStyled data-testid="locationPicker">
      <Icon name="mapPin" />
      <Typography variant="caption2" className="text">
        {location}
      </Typography>
      <Icon name="arrowDownThin" />
    </BoxStyled>
  );
};
