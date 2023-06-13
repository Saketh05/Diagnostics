import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import TestForms from "../../templates/TestForms";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon";
import { Stepper } from "../../molecules/Stepper";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import AddPatientDetails, {
  familylist,
} from "../../organisms/AddPatientDetails";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Link } from "react-router-dom";
import { PatientDetailsContext } from "../../../store/Store";
import patientService from "../../../api-service/PatientService/PatientService";
import { useAuth0 } from "@auth0/auth0-react";

const StyledGrid = styled(Grid)`
  & .stepper {
    width: 423px;
    height: 36px;
    margin-top: 5px;
    margin-left: 525px;
  }
  & #backButton {
    margin-left: 90px;
    path {
      stroke: ${theme.palette.blue[500]};
    }
  }
  & a {
    text-decoration: none;
  }
  & .form {
    margin-top: 33px;
    width: 700px;
    height: 560px;
    margin-left: auto;
    margin-right: auto;
  }
  & #footer {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
  }
`;

const AddPatientDetailsPage = () => {
  const { patientDetails } = useContext(PatientDetailsContext);
  const { user } = useAuth0();
  const handleNextClick = async () => {
    await patientService.savePatient({...patientDetails,userId:user?.sub});
  };
  return (
    <TestForms>
      <StyledGrid className="container">
        <Grid container direction={"row"}>
          <Box id="backButton">
            <Link to="/covid-rtpcr/select-patient">
              <Button
                textcolor={theme.palette.blue[500]}
                startIcon={<Icon name={"backArrow"} />}
                name={"Back"}
              ></Button>
            </Link>
          </Box>
          <Box className="stepper">
            <Stepper
              steps={["Home", "Covid RTPCR", "Add Patient"]}
              activeStep={2}
            ></Stepper>
          </Box>
        </Grid>
        <Box className="form">
          <AddPatientDetails list={familylist}></AddPatientDetails>
        </Box>
        <Box id="footer">
          <BottomNavigation
            buttonName="Next"
            cancelLink="/home"
            buttonLink="/covid-rtpcr/select-patient"
            handleNext={handleNextClick}
          />
        </Box>
      </StyledGrid>
    </TestForms>
  );
};

export default AddPatientDetailsPage;
