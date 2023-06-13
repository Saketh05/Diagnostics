import { Box, Grid, Divider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { AMOUNT, LOCATION,INSTRUCTION_CARD_TEXT} from "../../../Constants";
import theme from "../../../Theme/theme";
import BottomNavigation from "../../molecules/BottomNavigation";
import Instructions from "../../molecules/Instructions";
import OrderInfoCard from "../../molecules/OrderInfoCard";
import TrackYourOrder from "../../molecules/TrackYourOrder";
import TestForms from "../../templates/TestForms";
import UserFilled from "./../../../../public/assets/icons/userfilled.svg";

const StyledGrid = styled(Grid)`
  & #footer {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  & #track-your-order {
    width: 583px;
    height: 628px;
    margin-top: 100px;
    box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);

  }
  & .MuiAvatar-root {
    background-color: ${theme.palette.background1.main};
  }
  & #coloured-avatar {
    background-color: ${theme.palette.purple[800]};
  }
  & #divider {
    margin-top: 100px;
    margin-right: 200px;
    height: 828px;
    border-left: 1px solid ${theme.palette.grey1[200]};
  }
  & #patient-card {
    width: 434px;
    border-radius: 8px;
    #price {
      margin-left: 8px;
      margin-bottom: 8px;
    }
    margin: 24px;
    #instruction-card {
      margin-top:15px;
      height: 34px;
    }
    #cards{
        padding:8px 8px 0px 8px;
    }

  }
  & #patient-card-container {
    width: 482px;
    height: 272px;
    margin-left: 230px;
    margin-right: 100px;
    margin-top: 100px;
    box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
    & .MuiCardContent-root:last-child {
      padding-bottom: 0px;
    }
  }
  & #horizontal-divider {
    width: 334px;
    margin-bottom: 8px;
  }
  & #text {
    color: ${theme.palette.text2.main};
    margin-left: 8px;
    height: 18px;
    margin-bottom: 8px;
  }
  & .MuiCardHeader-root {
    padding: 0px;
  }
  & .MuiCardContent-root {
    padding: 0px 8px 8px 8px;
  }
  #grid {
    box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
    margin-bottom: 5px;
  }


`;

const TrackYourOrderPage = () => {
  return (
    <StyledGrid>
      <TestForms>
        <Grid container className="container">
          <Box id="patient-card-container">
            <Box id="patient-card">
              <Box id="grid">
              <Box id="cards">
                <OrderInfoCard
                  icon={<UserFilled />}
                  title={"Patrick Smith"}
                  subtitle={"COVID RT-PCR Test"}
                />
              </Box>
              <Divider id="horizontal-divider" />
              <Grid container direction="row">
                <Typography variant="caption" id="text">
                  {LOCATION}
                </Typography>
                <Typography variant="caption2" id="price">
                  {AMOUNT}
                </Typography>
              </Grid>
              </Box>
              <Box id="instruction-card">
                <Instructions
                  header={"Instructions"}
                  content=
                    {INSTRUCTION_CARD_TEXT}
                />
              </Box>
            </Box>
          </Box>
          <Box id="divider"></Box>
          <Grid id="track-your-order">
            <TrackYourOrder />
          </Grid>
        </Grid>
        <Box id="footer">
          <BottomNavigation
            buttonName="Back to Home"
            buttonLink="/home"
          ></BottomNavigation>
        </Box>
      </TestForms>
    </StyledGrid>
  );
};

export default TrackYourOrderPage;
