import { Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

const BoxStyled = styled(Box)`
  & .inputs {
    display: flex;
    gap: 1rem;
    & .otp-field {
      width: 2.5rem;
      outline: 0;
      border-width: 0 0 1px;
      border-color: ${theme.palette.grey1[100]};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      padding-bottom: 12px;
      color: ${theme.palette.text1.main};
      :focus {
        border-color: ${theme.palette.grey1[300]};
      }
      ::before {
        border-bottom: 1px solid ${theme.palette.grey1[300]};
      }
      ::after {
        border-bottom: 2px solid black;
      }
    }
  }
`;

export const intialOtp = {
  value: "",
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
};

interface OtpProps {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

export const OtpInputField: React.FC<OtpProps> = ({ setOtp }) => {
  const [value, setValue] = useState(intialOtp);
  const inputfocus = (elmnt: React.KeyboardEvent<HTMLDivElement>) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 1;
      if (next > 0) {
        (document.getElementById("otp" + next) as HTMLElement).focus();
      }
    } else {
      const next = elmnt.target.tabIndex + 1;
      if (next < 5) {
        (document.getElementById("otp" + next) as HTMLElement).focus();
      }
    }
  };
  const handleChange = (
    digit: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ ...value, [digit]: event.target.value });
    setOtp(value.otp1 + value.otp2 + value.otp3 + value.otp4);
  };

  return (
    <BoxStyled data-testid="otpInputField">
      <Box className="inputs">
        <input
          id="otp1"
          data-testid="otp1"
          autoComplete="off"
          maxLength={1}
          className="otp-field"
          tabIndex={1}
          value={value.otp1}
          onChange={(e) => handleChange("otp1", e)}
          onKeyUp={(e) => inputfocus(e)}
        />

        <input
          autoComplete="off"
          id="otp2"
          maxLength={1}
          className="otp-field"
          onChange={(e) => handleChange("otp2", e)}
          onKeyUp={(e) => inputfocus(e)}
          tabIndex={2}
          value={value.otp2}
        />
        <input
          id="otp3"
          autoComplete="off"
          maxLength={1}
          className="otp-field"
          onChange={(e) => handleChange("otp3", e)}
          onKeyUp={(e) => inputfocus(e)}
          tabIndex={3}
          value={value.otp3}
        />
        <input
          id="otp4"
          autoComplete="off"
          maxLength={1}
          className="otp-field"
          onChange={(e) => handleChange("otp4", e)}
          onKeyUp={(e) => inputfocus(e)}
          tabIndex={4}
          value={value.otp4}
        />
      </Box>
    </BoxStyled>
  );
};
