import {
  Typography,
  Stepper as MuiStepper,
  Step,
  StepLabel,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

interface StepperProps {
  steps: string[];
  activeStep: number;
}
const StepperStyled = styled(MuiStepper)`
  & .MuiStepIcon-root {
    display: none;
  }
  & .MuiStepConnector-root {
    color: ${theme.palette.text3.main};
  }
  & .step {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${theme.palette.text3.main};
  }
  & .activestep {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: ${theme.palette.text1.main};
  }
`;

export const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <StepperStyled nonLinear activeStep={activeStep} data-testid="stepper">
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel>
            <Typography
              className={activeStep === index ? "activestep" : "step"}
            >
              {label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </StepperStyled>
  );
};
