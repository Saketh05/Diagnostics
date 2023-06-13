import { styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import theme from "../../../Theme/theme";
import CalendarIcon from "../../../../public/assets/icons/calendar.svg";
import { Moment } from "moment";

interface DatePickerProps {
  label: string;
  handleSelection: (date: Moment) => void;
}

const StyledTextField = styled(TextField)`
  & .MuiIconButton-root {
    margin-top: -20px;
  }
  & .MuiInputLabel-root {
    color: ${theme.palette.text3.main};
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
  & .MuiInput-input {
    padding-top: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 583px;
    color: ${theme.palette.text1.main};
  }

  & .MuiInput-underline {
    &.MuiInput-underline:before {
      border-width: 1px;
      border-bottom-color: ${theme.palette.grey1[100]};
    }
    &.MuiInput-underline:after {
      border-width: 1px;
      border-bottom-color: ${theme.palette.grey1[100]};
    }
    &.Mui-focused {
      border-width: 1px;
      border-bottom-color: ${theme.palette.grey1[100]};
    }
    &:hover {
      border-width: 1px;
      border-bottom-color: ${theme.palette.grey1[100]};
    }
  }

  & label.Mui-focused {
    color: ${theme.palette.text3.main};
    border-bottom-color: ${theme.palette.grey1[100]};
  }
`;
const CustomDatePicker: React.FC<DatePickerProps> = ({
  handleSelection,
  label,
}) => {
  const [value, setValue] = useState<Moment>();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        views={["day", "month", "year"]}
        label={label}
        value={value}
        onChange={(newValue) => {
          if (newValue != null) {
            setValue(newValue);
            handleSelection(newValue);
          }
        }}
        components={{
          OpenPickerIcon: CalendarIcon,
        }}
        renderInput={(params) => (
          <StyledTextField
            data-testid="date"
            {...params}
            helperText={null}
            variant="standard"
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
