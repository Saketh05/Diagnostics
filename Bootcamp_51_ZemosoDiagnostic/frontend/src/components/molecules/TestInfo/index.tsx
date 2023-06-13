import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import theme from "../../../Theme/theme";

const BoxStyled = styled(Box)`
  width: 100%;
  background-color: ${theme.palette.purple[50]};
  padding: 1.1rem 0.75rem;
  border-radius: 12px;
  word-wrap: break-word;
  & .MuiTypography-overlineR {
    text-transform: none;
    color: ${theme.palette.text1.main};
  }
`;

export const TestInfo = ({ text }: { text: string }) => {
  return (
    <BoxStyled data-testid="testInfo">
      <Typography variant="overlineR">{text}</Typography>
    </BoxStyled>
  );
};
