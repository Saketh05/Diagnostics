import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { COVID_STEPPER } from "../../../Constants";
import TestForms from "../../templates/TestForms";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icon";
import TestDetails, {
  details,
  packageDescription,
  testDescription,
} from "../../organisms/TestDetails";

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
      width: 291px;
      margin-left: 35%;
    }
  }
  & .maincontent {
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

const CovidRTPCRTest = () => {
  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/home">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={COVID_STEPPER} activeStep={1} />
          </Box>
        </Box>
        <Box className="maincontent">
          <TestDetails
            title="Covid RTPCR Test"
            cost="$1200"
            time="24"
            testDesc={testDescription}
            packageDesc={packageDescription}
            featureCards={details}
          />
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <BottomNavigation
          cancelLink="/home"
          buttonName="Add Patient"
          buttonLink="/covid-rtpcr/select-patient"
        />
      </BoxStyledBottom>
    </TestForms>
  );
};

export default CovidRTPCRTest;
