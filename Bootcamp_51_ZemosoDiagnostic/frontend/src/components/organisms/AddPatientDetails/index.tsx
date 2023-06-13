import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Moment } from "moment";
import React, {useContext, useState } from "react";
import { PatientDetailsContext } from "../../../store/Store";
import theme from "../../../Theme/theme";
import CheckBoxLabel from "../../molecules/CheckBoxLabel";
import CustomDatePicker from "../../molecules/CustomDatePicker";
import RadioButtonWithText from "../../molecules/RadioButtonWithText";
import Tag from "../../molecules/Tag";
import CustomTextField from "../../molecules/TextField";

interface AddPatientDetailsProps {
  list: string[];
}

export const familylist = [
  "Myself",
  "Mother",
  "Father",
  "Son",
  "Daughter",
  "Others",
];

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 26px 0px #e9e8ed80;
  border-radius: 8px;
  padding: 8px;
  height: 560px;
  & .cardHeader {
    margin-bottom: 4px;
  }
  & .typo {
    color: ${theme.palette.text2.main};
  }
  & .typo2 {
    color: ${theme.palette.text3.main};
  }
  & .box {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
  }
  & .familyBox {
    display: flex;
    column-gap: 16px;
    margin-top: 8px;
    margin-bottom: 24px;
    > div {
      padding: 0;
    }
  }
  & .MuiInput-input {
    color: ${theme.palette.text1.main};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    padding-top: 12px;
  }
`;

export interface PatientDetailsType {
  patientId?:number;
  userId?: string;
  name: string;
  relation: string;
  dob: Date;
  gender: string;
}

export const initialPatient: PatientDetailsType = {
  name: "",
  relation: "",
  dob: new Date(),
  gender: "Male",
};

const AddPatientDetails = (props: AddPatientDetailsProps) => {
  const [label, setLabel] = useState<string>("");

  const {patientDetails, setPatientDetails} = useContext(PatientDetailsContext);

  const handleChange = (value: string | null, whatChanged: string) => {
    setPatientDetails({ ...patientDetails, [whatChanged]: value });
  };
  const handleDateChange = (value: Moment) => {
    setPatientDetails({ ...patientDetails, dob: value.toDate() });
  };

  return (
    <StyledCard>
      <CardHeader
        className="cardHeader"
        title={
          <Typography className="typo" variant="subtitle1">
            Add Patient Details
          </Typography>
        }
      />
      <CardContent>
        <Typography className="typo2" variant="caption3">
          Booking for whom
        </Typography>
        <Box className="familyBox">
          {props.list.map((obj, index) => {
            return (
              <Tag
                key={index}
                backgroundcolor={
                  label === obj
                    ? theme.palette.purple[800]
                    : theme.palette.grey1[100]
                }
                color={
                  label === obj
                    ? theme.palette.background1.main
                    : theme.palette.text3.main
                }
                label={obj}
                handleOnClickSelection={(relation) => {
                  setLabel(relation);
                  handleChange(relation, "relation");
                }}
              />
            );
          })}
        </Box>
        <Box className="box">
          <CustomTextField
            name="fname"
            label="Name"
            variant="standard"
            placeholder="eg: Patrick"
            onChange={(e) => {
              handleChange(e.target.value, "name");
            }}
          />
          <CustomDatePicker
            label="Date of Birth"
            handleSelection={(val: Moment) => {
              handleDateChange(val);
            }}
          />
          <RadioButtonWithText
            label="Gender"
            direction={true}
            names={["Male", "Female", "Others"]}
            defaultValue="Male"
            handleChange={(val) => handleChange(val, "gender")}
          />
        </Box>
      </CardContent>
      <CardActions>
        <CheckBoxLabel name="Save details for future" />
      </CardActions>
    </StyledCard>
  );
};

export default AddPatientDetails;