import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  ADD_PATIENT,
  ADD_PATIENT_STEPPER,
  NEW_PATIENT,
} from "../../../Constants";
import TestForms from "../../templates/TestForms";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Icon } from "../../atoms/Icon";
import SelectPatientCard from "../../organisms/SelectPatientCard";
import { getAge } from "../../../utils/Utils";
import { SelectPatientContext } from "../../../store/Store";
import patientService from "../../../api-service/PatientService/PatientService";
import { useAuth0 } from "@auth0/auth0-react";
import { PatientDetailsType } from "../../organisms/AddPatientDetails";

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
      width: 500px;
      margin-left: 30%;
    }
  }
  & .maincontent {
    margin-top: 2rem;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    & .MuiCard-root {
      box-shadow: 0px 0px 26px 0px #e9e8ed80;

      > hr {
        width: 635px;
        margin: 0 auto;
        margin-bottom: 13px;
        margin-top: 13px;
      }
    }
    & .MuiTypography-subtitle1 {
      color: ${theme.palette.text2.main};
    }
    & Button {
      color: ${theme.palette.blue[500]};
    }
  }
  & .MuiCardHeader-action {
    color: ${theme.palette.blue[500]};
  }
  & .StyledCardHeader {
    margin-top: 33px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const BoxStyledBottom = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);

  & .typo {
    color: ${theme.palette.text1.main};
  }
`;

export interface selectDetailsType {
  id: number;
  name: string;
  relation: string;
  dob: Date;
  gender: string;
}

const SelectPatientPage = () => {
  const [cards, setCards] = useState<PatientDetailsType[]>([]);
  const { selectPatient, setSelectPatient } = useContext(SelectPatientContext);
  const navigate = useNavigate();
  const { user } = useAuth0();

  const handleChange = (flag: boolean, id: number) => {
    flag
      ? setSelectPatient([...selectPatient, id])
      : setSelectPatient(selectPatient.filter((val) => val !== id));
  };

  
  useEffect(() => {
    const getPatients = async () => {
      if(user !=undefined && user.sub !=undefined){
        const patientData = await patientService.getAllPatients(user.sub);
        setCards(patientData);
      }
    };
  
    getPatients();
  }, [user]);

  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/covid-rtpcr/test-info">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={ADD_PATIENT_STEPPER} activeStep={2} />
          </Box>
        </Box>
        <Box className="maincontent">
          <Card>
            <CardHeader
              className="StyledCardHeader"
              title={<Typography variant="subtitle1">{ADD_PATIENT}</Typography>}
              action={
                <Button
                  startIcon={<AddIcon />}
                  variant="text"
                  onClick={() => navigate("/covid-rtpcr/add-patient")}
                >
                  <Typography variant="button">{NEW_PATIENT}</Typography>
                </Button>
              }
            />
            <Divider />
            <CardContent>
              {cards && cards.map((card) => {
                return (
                  <SelectPatientCard
                    key={card.patientId}
                    id={card.patientId}
                    handleChange={handleChange}
                    title={card.name}
                    subtitle={`${card.relation}, ${card.gender}, ${getAge(
                      card.dob
                    )} years`}
                  />
                );
              })}
            </CardContent>
          </Card>
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <BottomNavigation
          cancelLink="/home"
          buttonName="Select Lab"
          buttonLink="/lab/select-lab"
          typo={
            selectPatient.length ? (
              <Typography variant="button" className="typo">
                {selectPatient.length == 1
                  ? `${selectPatient.length} Patient Selected`
                  : `${selectPatient.length} Patients Selected`}
              </Typography>
            ) : (
              ""
            )
          }
        />
      </BoxStyledBottom>
    </TestForms>
  );
};

export default SelectPatientPage;
