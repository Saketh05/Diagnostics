import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import TestForms from "../../templates/TestForms";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon";
import { Stepper } from "../../molecules/Stepper";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Link } from "react-router-dom";
import { AddAddress } from "../../organisms/AddAddress";
import { AddressContext } from "../../../store/Store";
import addressService from "../../../api-service/address-service/AddressService";
import { useAuth0 } from "@auth0/auth0-react";

const StyledGrid = styled(Grid)`
  & .stepper {
    width: 671px;
    height: 36px;
    margin-top: 5px;
    margin-left: 425px;
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
    width: 583px;
    margin-left: auto;
    margin-right: auto;
    #address-form{
        height: 430px;
    }
  }
  & #footer {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
  }
`;

const AddAddressPage = () => {
  const { user } = useAuth0();
  const {address} = useContext(AddressContext);
  const handleNextClick = async () =>{
    await addressService.saveAddress({...address, userId:user?.sub, addressType:"Home"}) ;
  }
  return (
    <TestForms>
      <StyledGrid className="container">
        <Grid container direction={"row"}>
          <Box id="backButton">
          <Link to="/lab/select-address">
            <Button
              textcolor={theme.palette.blue[500]}
              startIcon={<Icon name={"backArrow"} />}
              name={"Back"}
            ></Button>
            </Link>
          </Box>
          <Box className="stepper">
            <Stepper
              steps={["Lab test", "Select appointment", "Add address", "Review order"]}
              activeStep={2}
            ></Stepper>
          </Box>
        </Grid>
        <Box className="form">
          <AddAddress/>
        </Box>
        <Box id="footer">
          <BottomNavigation
            buttonName="Next"
            cancelLink="/home"
            buttonLink="/lab/select-address"
            handleNext={handleNextClick} />
        </Box>
      </StyledGrid>
    </TestForms>
  );
};

export default AddAddressPage;