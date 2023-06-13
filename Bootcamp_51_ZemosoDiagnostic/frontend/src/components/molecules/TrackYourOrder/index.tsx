import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { TRACK_YOUR_ORDER } from "../../../Constants";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";

const steps = [
  {
    label: "Order placed",
    description: `Placed on Mon,22 Feb, 11.00 AM`,
  },
  {
    label: "Lab technician assigned",
    description: `Esther Howard`,
  },
  {
    label: "Sample collection",
    description: `On Tue, 23 Feb, 7.00-8.00 AM`,
  },
  {
    label: "Sample being examined",
    description: `Estimated time - 24 hrs`,
  },
  {
    label: "Report ready",
  },
];

const StyledStepper = styled(Card)`

  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);


  & .horizontalGrid {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  & .verticalGrid {
    display: flex;
    flex-direction: column;
  }
  & #overline {
    text-transform: none;
    color: ${theme.palette.text3.main};
  }
  & #avatarWithText{
    display:flex;
    align-items: center;
    background-color: ${theme.palette.grey1[50]};
    padding: 5px 4px;
    border-radius: 8px;
    font-size: 12px;
  }
  & .labelText{
    color: ${theme.palette.text2.main};
  }
  & #text{
    margin: 32px;
  }
  & #stepper{
    margin-top:32px;
  }
`;

const StyledLine = styled(Box)`
    height:56px;
    border-left: 1px solid ${theme.palette.grey1[200]};
    margin-left: 19px;
`

const StyledAvatar = styled(Avatar)<{
  backgroundColor?: string;
  borderColor?: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
`;
const TrackYourOrder = () => {
  return (
    <StyledStepper elevation={0} data-testid="track-your-order">
      <Typography id="text" variant="button">{TRACK_YOUR_ORDER}</Typography>
      <Grid id="stepper">
      <Grid className="horizontalGrid">
        <Grid>
          <StyledAvatar backgroundColor={theme.palette.purple[800]} id="coloured-avatar">
            <Icon name="check"></Icon>
          </StyledAvatar>
        </Grid>
        <Grid className="verticalGrid">
          <Typography variant="caption2" className="labelText">{steps[0]["label"]}</Typography>
          <Typography variant="overlineR" id="overline">
            {steps[0]["description"]}
          </Typography>
        </Grid>
      </Grid>

      <StyledLine />


      <Grid className="horizontalGrid">
        <Grid>
          <StyledAvatar
            backgroundColor={theme.palette.background1.main}
            borderColor={theme.palette.purple[800]}
          >
            <Icon name="labtechnician"></Icon>
          </StyledAvatar>
        </Grid>
        <Grid className="verticalGrid">
          <Typography variant="caption2" className="labelText">{steps[1]["label"]}</Typography>
          <Grid direction="row" id="avatarWithText">
            <Icon name="doctorAvatar"></Icon>
            <Typography variant="overlineR" id="overline">
              {steps[1]["description"]}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <StyledLine />

      <Grid className="horizontalGrid">
        <Grid>
          <StyledAvatar backgroundColor={theme.palette.background1.main} borderColor={theme.palette.grey1[200]}>
            <Icon name="pickUp"></Icon>
          </StyledAvatar>
        </Grid>
        <Grid className="verticalGrid">
          <Typography variant="caption2" className="labelText">{steps[2]["label"]}</Typography>
          <Typography variant="overlineR" id="overline">
            {steps[2]["description"]}
          </Typography>
        </Grid>
      </Grid>

      <StyledLine />

      <Grid className="horizontalGrid">
        <Grid>
          <StyledAvatar backgroundColor={theme.palette.background1.main} borderColor={theme.palette.grey1[200]}>
            <Icon name="testConducted"></Icon>
          </StyledAvatar>
        </Grid>
        <Grid className="verticalGrid">
          <Typography variant="caption2" className="labelText">{steps[3]["label"]}</Typography>
          <Typography variant="overlineR" id="overline">
            {steps[3]["description"]}
          </Typography>
        </Grid>
      </Grid>

      <StyledLine />

      <Grid className="horizontalGrid">
        <Grid>
          <StyledAvatar backgroundColor={theme.palette.background1.main} borderColor={theme.palette.grey1[200]}>
            <Icon name="file"></Icon>
          </StyledAvatar>
        </Grid>
        <Grid className="verticalGrid">
          <Typography variant="caption2" className="labelText">{steps[4]["label"]}</Typography>
        </Grid>
      </Grid>
      </Grid>

    </StyledStepper>
  );
};

export default TrackYourOrder;
