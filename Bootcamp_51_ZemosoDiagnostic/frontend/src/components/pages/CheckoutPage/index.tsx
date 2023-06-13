import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CHECKOUT } from "../../../Constants";
import theme from "../../../Theme/theme";
import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon";
import BottomNavigation from "../../molecules/BottomNavigation";
import PaymentOptionsCard, { PaymentDetails } from "../../organisms/PaymentOptionsCard";
import ReviewOrder from "../../organisms/ReviewOrder";
import TestForms from "../../templates/TestForms";

const StyledGrid = styled(Grid)`
  & #footer {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
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
  & .checkout {
    margin-left: 250px;
    color: ${theme.palette.text1.main};
  }
  & #grid {
    align-items: center;
  }
  & #payment-grid {
    width: 482px;
    height: 562px;
    box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
    border-radius: 8px;
  }
  & #order-grid {
    width: 583px;
    height: 690px;
    border-radius: 8px;
    box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  }
  & #divider {
    width: 0px;
    height: 850px;
    border-left: 1px solid ${theme.palette.grey1[100]};
  }
  & #grid-container {
    justify-content: space-evenly;
    margin-top: 30px;
  }
`;

const CheckoutPage = () => {
  return (
    <StyledGrid>
      <TestForms>
        <Grid container className="container">
          <Grid container direction={"row"} id="grid">
            <Box id="backButton">
              <Link to="/lab/review-order">
                <Button
                  textcolor={theme.palette.blue[500]}
                  startIcon={<Icon name={"backArrow"} />}
                  name={"Back"}
                ></Button>
              </Link>
            </Box>
            <Box className="checkout">
              <Typography variant="subtitle1">{CHECKOUT}</Typography>
            </Box>
          </Grid>
          <Grid container direction={"row"} id="grid-container">
            <Grid item id="order-grid">
              <ReviewOrder discount={"-$100"} />
            </Grid>
            <Box id="divider"></Box>
            <Grid item id="payment-grid">
              <PaymentOptionsCard  list={PaymentDetails} cardNum={""} cardHolder={""} expiryDate={""} />
            </Grid>
          </Grid>
          <Box id="footer">
            <BottomNavigation
              cancelLink="/home"
              buttonName={"Pay Now"}
              buttonLink={"/order-placed"}
            />
          </Box>
        </Grid>
      </TestForms>
    </StyledGrid>
  );
};

export default CheckoutPage;
