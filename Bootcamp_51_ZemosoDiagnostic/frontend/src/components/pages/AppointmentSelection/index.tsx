import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LAB_STEPPER } from "../../../Constants";
import { AppointmentContext } from "../../../store/Store";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import PageFooter from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import { AppointmentSelector } from "../../organisms/AppointmentSelector";
import TestForms from "../../templates/TestForms";

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
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
    }
  }
  & .forms {
    margin-top: 2rem;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const BoxStyledBottom = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
`;

export const AppointmentSelection = () => {
  const { appointment } = useContext(AppointmentContext);

  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/lab/select-lab">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={LAB_STEPPER} activeStep={1} />
          </Box>
        </Box>
        <Box className="forms">
          <AppointmentSelector />
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <PageFooter
          cancelLink="/home"
          buttonName={"Add Address"}
          buttonLink={"/lab/select-address"}
          typo={<Typography variant="button">{appointment}</Typography>}        />
      </BoxStyledBottom>
    </TestForms>
  );
};
