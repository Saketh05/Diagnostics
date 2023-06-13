import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ordersService, {
  OrdersType,
} from "../../../api-service/OrdersService/OrdersService";
import patientService from "../../../api-service/PatientService/PatientService";
import { RECENT_TESTS, TEXTS } from "../../../Constants";
import theme from "../../../Theme/theme";
import { UpcomingTestCard } from "../../molecules/UpcomingTestCard";
import Header from "../../organisms/Header";

const BoxStyled = styled(Box)`
  & .tests {
    margin-top: 1.5rem;
    padding-left: 90px;
    width: 583px;
    & .report-text {
      font-weight: 700;
      color: ${theme.palette.text2.main};
    }
    & .upcoming {
      margin: 2.5rem 0;
      color: ${theme.palette.text2.main};
    }
    & .recent {
      margin-top: 5rem;
      margin-bottom: 2.5rem;
      color: ${theme.palette.text2.main};
    }
  }
`;

export const AppointmentsPage = () => {
  const { user } = useAuth0();
  const [data, setData] = useState<OrdersType[]>([]);
  const [patientData, setPatientData] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      if (user && user.sub) {
        const appointmentDetails = await ordersService.getAllOrders(user.sub);
        setData(appointmentDetails);
        appointmentDetails.map((appointment: OrdersType) => {
          patientService
            .getPatientById(appointment.patientId)
            .then((res) => setPatientData((p) =>{return [...p,res.name]}));
        });
      }
    };
    loadData();
  }, [user]);

  return (
    <BoxStyled>
      <Header />
      <Box className="tests">
        <Typography variant="h1" className="report-text">
          {TEXTS.reports}
        </Typography>
        <Typography variant="subtitle1" className="upcoming">
          {TEXTS.recentTests}
        </Typography>
        {data.map((testInfo, index) => {
          return (
            <UpcomingTestCard
              logoName="covid"
              testName="Covid RTPCR"
              labName="Los Altos Center Lab"
              key={index}
              patientName={patientData[index]}
              appointmentSlot={testInfo.appointmentTime}
            />
          );
        })}
        <Typography variant="subtitle1" className="recent">
          {TEXTS.upcomingTests}
        </Typography>
        {RECENT_TESTS.map((recentTest) => (
          <UpcomingTestCard
            {...recentTest}
            key={`${recentTest.testName} ${recentTest.patientName}`}
          />
        ))}
      </Box>
    </BoxStyled>
  );
};
