import React, { useContext, useEffect, useState } from "react";
import { AddressSelectedContext } from "../../../store/Store";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon";
import AddressCard from "../../molecules/AddressCard";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Stepper } from "../../molecules/Stepper";
import TestForms from "../../templates/TestForms";
import theme from "../../../Theme/theme";
import AddIcon from "@mui/icons-material/Add";

import { LAB_STEPPER, TEXTS } from "../../../Constants";
import addressService from "../../../api-service/address-service/AddressService";
import { useAuth0 } from "@auth0/auth0-react";

const BoxStyled = styled(Box)`
  padding: 0px 90px;

  .text{
    color: ${theme.palette.text2.main};
  }

  .home{
    color: ${theme.palette.text1.main};
  }

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

  & .typo {
    color: ${theme.palette.text1.main};
  }

  & .button {
    color: ${theme.palette.blue[500]};
  }

  .styledCardHeader{
    margin-bottom: 33px;
  }

  & .address {
    margin-top: 2rem;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 26px 0px rgba(233, 232, 237, 0.5);
    padding: 1.5rem;
    padding-bottom: 8rem;
    border-radius: 0.5rem;
    background-color: ${theme.palette.background1.main};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & .heading {
      color: ${theme.palette.text2.main};
    }
    & .address-card {
      margin-bottom: 16px;
      cursor: pointer;
    }
  }
`;

const BoxStyledBottom = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
`;

export interface SavedAddressesType {
  id: number;
  address: string;
}

export const SelectAddressPage = () => {
  const [savedAddresses, setSavedAddresses] = useState<SavedAddressesType[]>(
    []
  );
  const { addressIdSelected, setAddressIdSelected } = useContext(
    AddressSelectedContext
  );

  const { user } = useAuth0();

  const getData = async () => {
    if(user?.sub !=undefined){
      const data = await addressService.getAllAddresses(user?.sub);
      data && setSavedAddresses(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  return (
    <TestForms>
      <BoxStyled>
        <Box className="top-nav">
          <Button startIcon={<Icon name="backArrow" />}>
            <Link to="/lab/select-appointment">
              <Typography variant="button" className="backButton">
                Back
              </Typography>
            </Link>
          </Button>
          <Box className="stepper">
            <Stepper steps={LAB_STEPPER} activeStep={2} />
          </Box>
        </Box>
        <Box className="address">
          <Card elevation={0}>
            <CardHeader
              className="styledCardHeader"
              title={
                <Typography variant="subtitle1">
                  {TEXTS.selectAddress}
                </Typography>
              }
              action={
                <Button
                  startIcon={<AddIcon className="button"/>}
                  variant="text"
                  onClick={() => navigate("/lab/add-address")}
                >
                  <Typography variant="button" className="button">
                    {TEXTS.addAddress}
                  </Typography>
                </Button>
              }
            />

            {savedAddresses.map((address) => {
              return (
                <Box
                  key={address.id}
                  onClick={() => setAddressIdSelected(address.id)}
                  className="address-card"
                >
                  <AddressCard
                     title={<Typography variant="body3" className="text">Default</Typography>}
                     content={<Typography variant="caption2" id="home">HOME</Typography>}
                     address={<Typography variant="caption" className="text">{address.address}</Typography>}
                     isSelected={addressIdSelected === address.id}
                  />
                </Box>
              );
            })}
          </Card>
        </Box>
      </BoxStyled>
      <BoxStyledBottom>
        <BottomNavigation
          cancelLink="/home"
          buttonName={"Next"}
          buttonLink={"/lab/review-order"}
        />
      </BoxStyledBottom>
    </TestForms>
  );
};
