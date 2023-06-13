import React, { ReactNode } from "react";
import { Button as MuiButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export type ButtonProps = {
  name: ReactNode;
  variant?: "contained" | "text" | "outlined";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  startIcon?: JSX.Element;
  width?: string;
  height?: string;
  background?: string;
  textcolor?: string;
};

const StyledButton = styled(MuiButton)<{
  background?: string;
  height?: string;
  width?: string;
  textcolor?: string;
}>`
  text-transform: none;
  border-radius: 8px;
  color: ${(props) => props.textcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  &:hover {
    background: ${(props) => props.background};
  }
  & .MuiTypography-root {
    text-transform: none;
  }
`;

export const Button = (props: ButtonProps) => {
  const {
    name,
    variant,
    onClick,
    startIcon,
    width,
    height,
    background,
    textcolor,
  } = props;

  return (
    <StyledButton
      data-testid="btn"
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      background={background}
      width={width}
      height={height}
      textcolor={textcolor}
    >
      <Typography variant="button" data-testid="btnText">
        {name}
      </Typography>
    </StyledButton>
  );
};

export default Button;
