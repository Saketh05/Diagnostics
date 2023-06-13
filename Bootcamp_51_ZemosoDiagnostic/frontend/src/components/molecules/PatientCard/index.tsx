import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { TEXTS } from "../../../Constants";

export interface PatientCardProps {
  name: string;
  info: string;
  handleChange: (event: React.ChangeEvent) => void;
  handleEdit: (event: React.MouseEvent) => void;
}

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  & .info {
    display: flex;
    flex: 1;
    cursor: pointer;
    & .MuiCheckbox-root {
      padding-top: 0px;
      align-self: flex-start;
    }
    & .Mui-checked {
      color: ${theme.palette.purple[800]};
    }
    & .title {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: ${theme.palette.text1.main};
    }
    & .subheader {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: ${theme.palette.text3.main};
    }
  }
  & .MuiButton-root {
    color: ${theme.palette.blue[500]};
    text-transform: none;
  }
`;

export const PatientCard = (props: PatientCardProps) => {
  const { name, info, handleChange, handleEdit } = props;
  return (
    <BoxStyled data-testid="patientCard">
      <FormControlLabel
        className="info"
        control={<Checkbox onChange={handleChange} />}
        label={
          <Box>
            <Typography className="title">{name}</Typography>
            <Typography className="subheader">{info}</Typography>
          </Box>
        }
      />
      <Button onClick={handleEdit}>{TEXTS.editButton}</Button>
    </BoxStyled>
  );
};
