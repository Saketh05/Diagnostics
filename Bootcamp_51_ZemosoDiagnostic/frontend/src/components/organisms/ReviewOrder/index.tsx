import { Avatar, Card, Divider, Grid, Typography, Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import {
  LOS_ATLOS_CENTER_LAB,
  DISCOUNT,
  ITEM_TOTAL,
  GRAND_TOTAL,
  PATIENT_DETAILS_1,
  PRICE,
  TEXT_1,
  E_REPORT,
  SELECTED_TIME_SLOTS,
  ADDRESS_SELECTED,
} from "../../../Constants";
import {
  AddressSelectedContext,
  AppointmentContext,
  SelectPatientContext,
} from "../../../store/Store";
import { PatientDetailsType } from "../AddPatientDetails";
import { SavedAddressesType } from "../../pages/SelectAddressFromList";
import { getAge, getAppointment, appointmentTime } from "../../../utils/Utils";
import patientService from "../../../api-service/PatientService/PatientService";
import { useAuth0 } from "@auth0/auth0-react";
import addressService from "../../../api-service/address-service/AddressService";

const ReviewOrderStyled = styled(Card)`
  width: 583px;
  height: 125%;
  box-shadow: none;
  & .card-1 {
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 8px;
    margin-top: 24px;
    margin-left: 75px;
    margin-right: 74px;
    position: absolute;
    width: 434px;
    height: 52px;
    box-shadow: none;
  }

  & .logo {
    margin: 6px 14px 6px 6px;
    svg {
      margin-left: 8px;
    }
  }

  & .avatar {
    background-color: ${theme.palette.background1.main};
    border: 1px solid ${theme.palette.grey1[100]};
  }

  & .lab-name {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  & .grid-1 {
    margin-top: 100px;
    margin-left: 87px;
    margin-bottom: 12px;
  }

  & .grid-2 {
    margin-left: 87px;
    margin-bottom: 12px;
  }

  & .price {
    margin-right: 295px;
  }

  & .text {
    color: ${theme.palette.text2.main};
  }
  & .discount {
    margin-right: 296px;
  }

  & .discount-price {
    color: ${theme.palette.alerts.main};
  }

  & .total {
    margin-right: 283px;
    margin-bottom: 31px;
  }

  & .total-text {
    color: ${theme.palette.text1.main};
  }

  & .card-2 {
    width: 434px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 12px;
    margin-left: 75px;
    margin-bottom: 8px;
    box-shadow: none;
  }

  & .patient-details {
    margin: 16px 16px 0px 16px;
  }

  & .title {
    margin-left: 0px;
    color: ${theme.palette.text3.main};
  }

  & .user-icon {
    margin-top: 3px;
  }

  & .grid-3 {
    margin-bottom: 12px;
  }

  & .grid-3-name {
    margin: 20px 0px 0px 16px;
  }

  & .grid-3-self {
    margin: 22px 8px 0px 4px;
  }

  & .grid-3-gender {
    margin: 22px 8px 0px 8px;
  }

  & .divider {
    margin-top: 22px;
    color: ${theme.palette.grey[100]};
  }
  & .grid {
    margin-bottom: -2px;
  }
  & .grid-4-test {
    margin: 0px 205px 0px 16px;
    color: ${theme.palette.text1.main};
  }

  & .grid-4-price {
    margin: 0px 24px 0px 0px;
  }

  & .card-3 {
    width: 434px;
    height: 92px;
    border: 1px solid ${theme.palette.grey[100]};
    border-radius: 12px;
    margin-left: 75px;
    margin-bottom: 8px;
    box-shadow: none;
  }

  & .day {
    margin: 16px 12px 3px 16px;
  }

  & .time {
    margin: 16px 0px 3px 12px;
  }

  & .time-text {
    text-transform: uppercase;
  }

  & .payment {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  & .home-icon {
    margin-top: 3px;
    svg {
      height: 16px;
      width: 16px;
      font-weight: bold;
      stroke-width: 2px;
    }

    path {
      stroke: ${theme.palette.grey1[300]};
    }
  }
`;

interface ReviewOrderProps {
  discount: string;
}

const ReviewOrder: React.FC<ReviewOrderProps> = ({ discount }) => {
  const { user } = useAuth0();

  const { appointment } = useContext(AppointmentContext);

  const { addressIdSelected } = useContext(AddressSelectedContext);

  const { selectPatient } = useContext(SelectPatientContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_patients, setPatients] = useState<PatientDetailsType>();

  const [selectedPatientDetails, setSelectedPatientsDetails] = useState<
    PatientDetailsType[]
  >([]);

  useEffect(() => {
    user &&
      user.sub &&
      patientService
        .getAllPatients(user?.sub)
        .then((res) => setPatients(res.data));
  }, [user]);

  const [address, setAddress] = useState<SavedAddressesType>({
    id: 1,
    address: "Mountain California",
  });

  useEffect(() => {
    const loadData = async () => {
      if (user && user.sub) {
        const addresses = await addressService.getAllAddresses(user.sub);

        const savedAddress =
          addresses &&
          addresses.find((addressItem) => addressItem.id === addressIdSelected);
        if (savedAddress != undefined) {
          setAddress(savedAddress);
        }
        const allPatients = await patientService.getAllPatients(user?.sub);

        const selected = allPatients.filter(
          (item: PatientDetailsType) =>
            item.patientId && selectPatient.indexOf(item.patientId) !== -1
        );
        setSelectedPatientsDetails(selected);
      }
    };
    loadData();
  }, [addressIdSelected, selectPatient, user]);

  const price = 1200 * selectedPatientDetails.length;

  const total = price - 100;

  return (
    <ReviewOrderStyled data-testid="review-order">
      <Card className="card-1">
        <Grid container>
          <Grid item className="logo">
            <Avatar className="avatar">
              <Logo name="altos" />
            </Avatar>
          </Grid>
          <Grid item className="lab-name">
            <Typography variant="button">{LOS_ATLOS_CENTER_LAB}</Typography>
          </Grid>
        </Grid>
      </Card>

      <Grid>
        <Grid container className="grid-1">
          <Grid item className="price">
            <Typography variant="payment" className="text">
              {ITEM_TOTAL}
            </Typography>
          </Grid>
          <Grid item className="payment">
          <Typography variant="caption" sx={{color: theme.palette.text2.main}}>${price}</Typography>
          </Grid>
        </Grid>

        <Grid container className="grid-2">
          <Grid item className="discount">
            <Typography variant="payment" className="text">
              {DISCOUNT}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="payment" className="discount-price">
              {discount}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className="grid-2">
          <Grid item className="total">
            <Typography variant="payment" className="total-text">
              {GRAND_TOTAL}
            </Typography>
          </Grid>
          <Grid item className="payment">
          <Typography variant="caption1" sx={{color: theme.palette.text1.main}}>${total}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box className="card-2">
        <Grid container className="patient-details">
          <Grid item className="user-icon">
            <Icon name="user" />
          </Grid>
          <Grid item>
            <Typography variant="caption3" className="title">
              {PATIENT_DETAILS_1}
            </Typography>
          </Grid>
        </Grid>
        <Divider />

        {selectedPatientDetails.map((item) => {
          return (
            <Box key={item.name}>
              <Grid container className="grid-3">
                <Grid item className="grid-3-name" xs={8}>
                  <Typography variant="caption2">{item.name}</Typography>
                </Grid>
                <Grid item className="grid-3-self">
                  <Typography variant="review">{item.relation}</Typography>
                </Grid>
                <Grid item className="divider">
                  |
                </Grid>

                <Grid item className="grid-3-gender">
                  <Typography variant="review">
                    {item.gender === "Male" ? "M" : "F"}
                  </Typography>
                </Grid>
                <Grid item className="divider">
                  |
                </Grid>
                <Grid item className="grid-3-self">
                  <Typography variant="review">{getAge(item.dob)}</Typography>
                </Grid>
              </Grid>

              <Grid container className="grid-4">
                <Grid item className="grid-4-test">
                  <Typography variant="overlineR">COVID RT-PCR-Test</Typography>
                </Grid>
                <Grid item className="grid-4-price">
                  <Typography
                    variant="review2"
                    sx={{
                      color: theme.palette.text1.main,
                    }}
                  >
                    {PRICE}
                  </Typography>
                </Grid>
                <Grid item sx={{ marginTop: "2px" }}>
                  <Icon name="trash" />
                </Grid>
              </Grid>
            </Box>
          );
        })}

        <Grid>
          <Grid item sx={{ margin: "0px 0px 12px 16px" }}>
            <Typography variant="review">{TEXT_1}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="caption2"
              sx={{ color: theme.palette.alerts.main, marginLeft: "16px" }}
            >
              {E_REPORT}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Card className="card-3">
        <Grid container className="patient-details">
          <Grid item className="user-icon">
            <Icon name="reviewCalendar" />
          </Grid>
          <Grid item>
            <Typography variant="caption3" className="title">
              {SELECTED_TIME_SLOTS}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item className="day">
            <Typography variant="caption3">
              {getAppointment(appointment)}
            </Typography>
          </Grid>
          <Grid item className="divider">
            |
          </Grid>
          <Grid item className="time">
            <Typography variant="caption3" className="time-text">
              {appointmentTime(appointment)}
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card className="card-3">
        <Grid container className="patient-details">
          <Grid item className="home-icon">
            <Icon name="home" />
          </Grid>
          <Grid item>
            <Typography variant="caption3" className="title">
              {ADDRESS_SELECTED}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid item className="day">
          <Typography variant="caption3">{address.address}</Typography>
        </Grid>
      </Card>
    </ReviewOrderStyled>
  );
};

export default ReviewOrder;
