import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TEXTS, AVAILABLE_TIME_SLOTS } from "../../../Constants";
import { AppointmentContext } from "../../../store/Store";
import theme from "../../../Theme/theme";
import {
  getDayNamesInMonth,
  MONTHS,
  timeSlotFormatter,
} from "../../../utils/Utils";
import { DaySelector } from "../../molecules/DaySelector";
import Month from "../../molecules/Month";

const BoxStyled = styled(Box)`
  box-shadow: 0px 0px 26px 0px rgba(233, 232, 237, 0.5);
  padding: 1.5rem;
  padding-bottom: 8rem;
  border-radius: 0.5rem;
  background-color: ${theme.palette.background1.main};

  & .divider {
    border-top: 1px solid ${theme.palette.grey1[50]};
    
  }

  & .address {
    color: ${theme.palette.text2.main};
  }
  & .slots {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 2rem;
    .MuiTabs-indicator {
      color: transparent;
      border-radius: 12px;
    }
    .MuiTab-root {
      border-radius: 12px;
      background-color: ${theme.palette.grey[50]};
      color: ${theme.palette.text2.main};
      text-transform: none;
      padding: 0px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    .MuiTabs-scrollButtons.Mui-disabled {
      opacity: 0.3;
    }
    & .month {
      & .MuiTab-root {
        width: 142px;
        height: 40px;
      }
      & .Mui-selected {
        background: ${theme.palette.purple[800]};
        color: ${theme.palette.background1.main};
      }
      & .MuiTabs-flexContainer {
        gap: 1.4rem;
      }
    }
    & .days {
      & .MuiTab-root {
        width: 65px;
        height: 76px;
      }
      & .MuiTabs-flexContainer {
        gap: 1rem;
      }
    }
    & .time-root {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      gap: 3rem;
      & .time {
        display: flex;
        gap: 2rem;
        padding-left: 40px;
        & .MuiTypography-caption2 {
          color: ${theme.palette.text1.main};
        }
        & .time-slots {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 60%;
        }
      }
    }
  }
`;

export const AppointmentSelector = () => {
  const [month, setMonth] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [daysInMonth, setDaysInMonth] = React.useState<string[]>([]);
  const { setAppointment } = useContext(AppointmentContext);

  const [time, setTime] = React.useState(
    AVAILABLE_TIME_SLOTS["06 AM - 12 AM"][0]
  );
  useEffect(() => {
    setDaysInMonth(getDayNamesInMonth(month));
    setDay(0);
  }, [month]);

  const handleMonthChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMonth(newValue);
    const daysInMonthTemp = getDayNamesInMonth(newValue);
    setAppointment(
      `${MONTHS[newValue]} ${1}, ${daysInMonthTemp[0]}, ${timeSlotFormatter(
        time
      )}`
    );
  };
  const handleDayChange = (_event: React.SyntheticEvent, newValue: number) => {
    setDay(newValue);
    setAppointment(
      `${MONTHS[month]} ${newValue + 1}, ${
        daysInMonth[newValue]
      }, ${timeSlotFormatter(time)}`
    );
  };
  const handleTimeSlotClick = (timeSlot: string) => {
    setTime(timeSlot);

    setAppointment(
      `${MONTHS[month]} ${day + 1}, ${daysInMonth[day]}, ${timeSlotFormatter(
        timeSlot
      )}`
    );
  };

  return (
    <BoxStyled data-testid="AppointmentSelector">
      <Typography variant="subtitle1" className="address">
        {TEXTS.selectAppointment}
      </Typography>
      <Box className="slots">
        <Tabs
          value={month}
          onChange={handleMonthChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          className="month"
          TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
        >
          {MONTHS.map((monthItem) => (
            <Tab label={monthItem} key={monthItem} sx={{ minHeight: "40px" }} />
          ))}
        </Tabs>
        <Box className="divider"></Box>
        <Tabs
          value={day}
          onChange={handleDayChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          className="days"
          TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
        >
          {daysInMonth.map((dayItem, index) => (
            <Tab
              label={
                <DaySelector
                  date={index + 1}
                  day={dayItem.substring(0, 3)}
                  selected={index === day}
                />
              }
              key={dayItem + index}
              sx={{ minWidth: "65px" }}
            />
          ))}
        </Tabs>
        <Box className="divider"></Box>
        <Box className="time-root">
          {Object.keys(AVAILABLE_TIME_SLOTS).map((slot) => {
            return (
              <Box className="time" key={slot}>
                <Typography variant="caption2">{slot}</Typography>
                <Box className="time-slots">
                  {AVAILABLE_TIME_SLOTS[
                    slot as keyof typeof AVAILABLE_TIME_SLOTS
                  ].map((timeSlot) => (
                    <Box
                      key={timeSlot}
                      onClick={() => handleTimeSlotClick(timeSlot)}
                    >
                      <Month checked={time === timeSlot}>{timeSlot}</Month>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </BoxStyled>
  );
};
