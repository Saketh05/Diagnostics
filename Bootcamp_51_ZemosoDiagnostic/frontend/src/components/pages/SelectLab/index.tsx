import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import PageFooter from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import LabSelector from "../../organisms/LabSelector";
import TestForms from "../../templates/TestForms";
import {
  FOR_ONE_TEST,
  LAB_STEPPER,
  LOS_ATLOS_CENTER_LAB,
} from "../../../Constants";
import { SelectPatientContext } from "../../../store/Store";

const BoxStyled = styled(Box)`
  padding: 0px 90px;
  & .top-nav {
    display: flex;
    justify-content: start;
    align-items: center;
    & path {
      stroke: ${theme.palette.blue[500]};
    }
    & a {
      text-decoration: none;
    }
    & .backButton {
      color: ${theme.palette.blue[500]};
    }
    & .stepper {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;

      .MuiStepper-root {
        margin-left: -20%;
      }
    }
  }
  & .forms {
    margin-top: 2rem;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  & .cost {
    color: ${theme.palette.text1.main};

    > span {
      color: ${theme.palette.text3.main};
    }
  }
  & .lab {
    color: ${theme.palette.text2.main};
  }
`;

const BoxStyledBottom = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
`;

export const SelectLab = () => {
  const {selectPatient} = useContext(SelectPatientContext);
  console.log(selectPatient)

  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/covid-rtpcr/select-patient">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={LAB_STEPPER} activeStep={0} />
          </Box>
        </Box>
        <Box className="forms">
          <LabSelector />
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <PageFooter
          cancelLink="/home"
          buttonName={"Select Date & Time"}
          buttonLink={"/lab/select-appointment"}
          typo={
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
            >
              <Typography variant="overline2" className="lab">
                {LOS_ATLOS_CENTER_LAB}
              </Typography>
              <Typography variant="button" className="cost">
                $1200{" "}
                <Typography variant="overlineR">{FOR_ONE_TEST}</Typography>
              </Typography>
            </Box>
          }
        />
      </BoxStyledBottom>
    </TestForms>
  );
};
