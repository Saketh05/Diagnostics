import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

const BoxStyled = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.purple[50]};
`;

interface AuthenticationProps {
  component: ReactNode;
}

export const Authentication = ({ component }: AuthenticationProps) => {
  return <BoxStyled>{component}</BoxStyled>;
};
