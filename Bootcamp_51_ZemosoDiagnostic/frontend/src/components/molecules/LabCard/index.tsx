import { Card, styled, Grid, Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import Logo from "../../atoms/Logo";

const StyledGrid = styled(Grid)<{ columnGap?: string; margin?: string }>`
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.columnGap};
  margin: ${(props) => props.margin};
  padding: 0px;
  & .calendar {
    path {
      stroke: ${theme.palette.alerts.main};
    }
  }
  & #grid {
    align-items: center;
    margin-top: -4px;
    gap: 4px;
  }
`;

const StyledTypography = styled(Typography)<{ color: string }>`
  color: ${(props) => props.color};
  text-transform: lowercase;
  font-style: normal;
  text-transform: none;
`;

const StyledCard = styled(Card)`
  width: 535px;
  height: 144px;
  margin: 0px;
  padding: 0px;
`;

const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const StyledBox = styled(Box)`
  margin-left: 279px;
`;

interface LabCardProps {
  labId: string;
  labName: string;
  labRating: string;
  noOfSlots: string;
  info: string;
  cost: string;
  onClick: (id: string) => void;
  active: string;
  testid?: string;
}

const LabCard: React.FC<LabCardProps> = ({
  labId,
  labName,
  labRating,
  noOfSlots,
  info,
  cost,
  onClick,
  active,
  testid
}) => {
  return (
    <StyledCard
      elevation={0}
      onClick={() => onClick(labId)}
      data-testid={testid}
      sx={{
        border: active === labId ? `2px solid ${theme.palette.purple[800]}` : `2px solid ${theme.palette.grey[100]}`,
        borderRadius: "8px",
      }}
    >
      <StyledGrid container columnGap="16px" margin="12px">
        <Grid item>
          <Logo name="altos" />
        </Grid>
        <StyledGridContainer item>
          <StyledGrid columnGap="0px" height={20}>
            <StyledTypography variant="button" color={theme.palette.text2.main}>
              {labName}
            </StyledTypography>
            {active === labId ? (
              <StyledBox>
                <Icon name="selected" />
              </StyledBox>
            ) : (
              ""
            )}
          </StyledGrid>

          <StyledGrid columnGap="24px" margin="0px 0px 0px -5px">
            <StyledGrid item columnGap="0px">
              <Logo name="star" margin="0px 5px" />
              <StyledTypography
                variant="caption2"
                color={theme.palette.text2.main}
              >
                {labRating}
              </StyledTypography>
            </StyledGrid>

            <StyledGrid item id="grid">
              <Box className="calendar">
                <Icon name="calendar" />
              </Box>
              <StyledTypography
                variant="caption2"
                color={theme.palette.alerts.main}
                id="slots"
              >
                {noOfSlots}
              </StyledTypography>
            </StyledGrid>
          </StyledGrid>

          <Grid item xs={12}>
            <StyledTypography
              variant="caption"
              color={theme.palette.text2.main}
            >
              {info}
            </StyledTypography>
          </Grid>

          <Grid item xs={12}>
            <StyledTypography
              variant="caption2"
              color={theme.palette.text1.main}
            >
              {cost}
            </StyledTypography>
          </Grid>
        </StyledGridContainer>
      </StyledGrid>
    </StyledCard>
  );
};

export default LabCard;
