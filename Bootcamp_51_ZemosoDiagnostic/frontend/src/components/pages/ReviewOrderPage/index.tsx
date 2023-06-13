import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import PageFooter from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import TestForms from "../../templates/TestForms";
import { LAB_STEPPER } from "../../../Constants";
import ReviewOrder from "../../organisms/ReviewOrder";
import ordersService, {
  OrdersType,
} from "../../../api-service/OrdersService/OrdersService";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppointmentContext,
  AddressSelectedContext,
  SelectPatientContext,
} from "../../../store/Store";
import { appointmentTime, getAppointmentDate } from "../../../utils/Utils";

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
    width: 583px;
    height: 690px;
    border-radius: 8px;
    box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
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

export const ReviewOrderPage = () => {
  const { user } = useAuth0();

  const { appointment } = useContext(AppointmentContext);

  const { addressIdSelected } = useContext(AddressSelectedContext);

  const { selectPatient } = useContext(SelectPatientContext);
  console.log(selectPatient);
  const saveOrder = () => {
    if (user?.sub && user) {
      const order: OrdersType = {
        userId: user && user?.sub,
        addressId: addressIdSelected,
        patientId: selectPatient[0],
        appointmentDate: getAppointmentDate(appointment),
        appointmentTime: appointmentTime(appointment)
      };
      console.log(order)
      ordersService.saveOrder(order);
    }
  };

  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/lab/select-address">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={LAB_STEPPER} activeStep={3} />
          </Box>
        </Box>
        <Box className="forms">
          <ReviewOrder discount="-$100" />
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <PageFooter
          cancelLink="/home"
          buttonName={"Continue"}
          buttonLink={"/lab/checkout"}
          handleNext={saveOrder}
        />
      </BoxStyledBottom>
    </TestForms>
  );
};
