import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  width: 100%;

  & .MuiInputLabel-root {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #757380;
    &.Mui-focused {
      color: #757380;
    }
  }
  & .MuiInput-underline {
    &.MuiInput-underline:before {
      border-color: #e9e8ed;
    }
    &.MuiInput-underline:after {
      border-color: #e9e8ed;
    }
    &.Mui-focused {
      border-bottom-color: #e9e8ed;
    }
    &:hover {
      border-color: #e9e8ed;
    }
  }
  & .MuiInput-input {
    margin-bottom: 3px;
  }
  
  & .MuiInput-root {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9f9da6;

    &.Mui-focused {
      color: #2d2a38;
    }
    &:hover:not(.Mui-disabled):before {
      border-color: #e9e8ed;
    }
  }
`;

const CustomTextField = ({
  label,
  defaultValue,
  variant,
  ...rest
}: TextFieldProps) => {
  return (
    <StyledTextField
      InputLabelProps={{ shrink: true }}
      data-testid="textField"
      label={label}
      defaultValue={defaultValue}
      variant={variant}
      {...rest}
    />
  );
};

export default CustomTextField;
