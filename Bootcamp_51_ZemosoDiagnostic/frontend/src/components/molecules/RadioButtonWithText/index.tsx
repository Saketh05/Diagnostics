import { styled } from "@mui/system";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";

interface RadioProps {
  direction: boolean;
  defaultValue: string;
  label: string;
  names: string[];
  handleChange: (c: string) => void;
}

const StyledRadio = styled(Radio)({
  "&.Mui-checked": {
    color: theme.palette.purple[800],
  },
});

const StyledLabel = styled(FormLabel)({
  "&.MuiFormLabel-root": {
    color: "#5A5766",
  },
  "&.Mui-focused": {
    color: "#5A5766",
  },
});

const StyledFormControlLabel = styled(FormControlLabel)({
  "&.MuiFormControlLabel-label": {
    color: "#2D2A38",
  },
  "&.MuiFormControlLabel-root": {
    color: "#2D2A38",
    marginRight:'0px'
  },
});

const RadioButtonWithText = ({
  defaultValue,
  direction,
  names,
  label,
  handleChange
}: RadioProps) => {
  return (
    <FormControl sx={{ width: "281px" }}>
      <StyledLabel>
        <Typography variant="caption2">{label}</Typography>
      </StyledLabel>
      <RadioGroup
        row={direction}
        defaultValue={defaultValue.toLowerCase()}
        sx={{ justifyContent: "space-between" }}
        onChange={(e)=>{handleChange(e.target.value)}}
      >
        {names.map((name, index) => {
          return (
            <StyledFormControlLabel
              key={index}
              value={name.toLowerCase()}
              control={<StyledRadio />}
              label={
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "14px", lineHeight: "18px",  }}
                >
                  {name}
                </Typography>
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonWithText;