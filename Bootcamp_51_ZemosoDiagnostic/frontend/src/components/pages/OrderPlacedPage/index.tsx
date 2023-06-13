import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import TestForms from "../../templates/TestForms";
import BottomNavigation from "../../molecules/BottomNavigation";
import { Button, CardHeader, Typography } from "@mui/material";
import theme from "../../../Theme/theme";
import paymentSuccess from "../../../../public/assets/images/paymentSuccess.png";
import { Icon } from "../../atoms/Icon";
import { ORDER_TEXT } from "../../../Constants";
import { useNavigate } from "react-router-dom";

const BoxStyledBottom = styled(Box)`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);

  & .typo {
    color: ${theme.palette.blue[500]};
  }
  & .extraButton {
    background: none;
    border: 1px solid ${theme.palette.blue[500]};

    :hover {
      background: none;
      color: ${theme.palette.blue[500]};
      border: 1px solid ${theme.palette.blue[500]};
    }
    width: 142px;
    height: 42px;
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  column-gap: 144px;
  margin: 0 auto;
  width: 60%;
  margin-top: 84px;
  & .typo1 {
    color: ${theme.palette.text1.main};
  }
  & .typo2 {
    color: ${theme.palette.blue[800]};
  }
  & .typo3 {
    color: ${theme.palette.text2.main};
  }

  & .box {
    box-shadow: 0px 0px 26px 0px #e9e8ed80;
    width: 482px;
    height: 245px;
    padding: 24px;
  }
  & .MuiCardHeader-avatar {
    margin-top: 10.33px;
    margin-right: 0;
  }
  & .MuiCardHeader-root {
    padding: 0;
    margin-top: 41px;
    margin-bottom: 8px;
  }
`;

const OrderPlacedPage = () => {
  const navigate = useNavigate();

  return (
    <TestForms>
      <StyledBox>
        <img src={paymentSuccess} />
        <Box className="box">
          <Typography className="typo1" variant="subtitle1">
            Your order has been placed
          </Typography>
          <CardHeader
            title={
              <Typography className="typo2" variant="button">
                Instructions
              </Typography>
            }
            avatar={<Icon name="info" />}
          />
          <Typography className="typo3" variant="payment">
            {ORDER_TEXT}
          </Typography>
        </Box>
      </StyledBox>
      <BoxStyledBottom>
        <BottomNavigation
          buttonName="Track Your Order"
          buttonLink="/trackorder"
          typo={
            <Button
              variant="outlined"
              className="extraButton"
              onClick={() => navigate("/home")}
            >
              <Typography className="typo" variant="faq">
                Back to Home
              </Typography>
            </Button>
          }
        />
      </BoxStyledBottom>
    </TestForms>
  );
};

export default OrderPlacedPage;
