/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

interface DaySelectorProps {
  date: number;
  day: string;
  selected: boolean;
}

const StyledBox = styled(Box)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  width: 65px;
  height: 76px;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? theme.palette.purple[800] : theme.palette.grey[50]};
  color: ${(props) =>
    props.selected ? theme.palette.background1.main : theme.palette.text2.main};
  & .MuiTypography-payment {
    text-transform: none;
  }
  & .day {
    color: ${(props) =>
    props.selected ? theme.palette.background1.main : theme.palette.text3.main};
  }
`;

export const DaySelector = ({ date, day, selected }: DaySelectorProps) => {
  return (
    <StyledBox selected={selected} data-testid="daySelector">
      <Typography variant="payment" component="div" className="day">
        {day}
      </Typography>
      <Typography variant="button">{date}</Typography>
    </StyledBox>
  );
};
