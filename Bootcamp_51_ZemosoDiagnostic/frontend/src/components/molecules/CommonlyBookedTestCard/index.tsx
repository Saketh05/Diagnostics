import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import Logo, { LogoProps } from "../../atoms/Logo";

export interface CommonlyBookedTestCardProps {
  logoName: LogoProps["name"];
  text: string;
  path: string;
}

const BoxStyled = styled(Box)`
:hover {
  cursor: pointer;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  :hover {
    cursor: pointer;
  }
  & .logo {
    width: 50px;
    height: 50px;
    background-color: ${theme.palette.blue[50]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
  & .MuiTypography-caption2 {
    color: ${theme.palette.text2.main};
  }
`;

export const CommonlyBookedTestCard = ({
  logoName,
  text,
  path
}: CommonlyBookedTestCardProps) => {

  const navigate = useNavigate();

  return (
    <BoxStyled onClick={()=> navigate(path)}>
      <Box className="logo">
        <Logo name={logoName} />
      </Box>
      <Typography variant="caption2">{text}</Typography>
    </BoxStyled>
  );
};
