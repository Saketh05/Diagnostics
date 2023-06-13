import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import { ReportCard, ReportCardProps } from "../ReportCard";

interface ReportsPageContentProps {
  recentList: ReportCardProps[];
}

const StyledBox = styled(Box)`
  width: 583px;
  margin-left: 90px;
  margin-top: 40px;
  > h2 {
    font-weight: 700;
  }
  & .typo {
    color: ${theme.palette.text2.main};
  }
  & .upcomingBox {
    margin-top: 40px;
  }
  & .RecentBox {
    margin-top: 60px;
  }
  & .upcomingBox,
  & .RecentBox {
    display: flex;
    flex-direction: column;
    row-gap: 26px;
    > .typo {
      margin-bottom: 10px;
    }
  }
`;

const ReportsPageContent = (props: ReportsPageContentProps) => {
  return (
    <StyledBox>
      <Typography className="typo" variant="h2">
        Reports
      </Typography>
      <Box className="upcomingBox">
        <Typography className="typo" variant="subtitle1">
          Upcoming Reports
        </Typography>
        {props.recentList.map((card, index) => {
          if (card.variant == "upcoming")
            return (
              <ReportCard
                key={index}
                testName={card.testName}
                labName={card.labName}
                variant={card.variant}
              />
            );
        })}
      </Box>
      <Box className="RecentBox">
        <Typography className="typo" variant="subtitle1">
          Recent Reports
        </Typography>
        {props.recentList.map((card, index) => {
          if (card.variant == "completed")
            return (
              <ReportCard
                key={index}
                testName={card.testName}
                labName={card.labName}
                variant={card.variant}
              />
            );
        })}
      </Box>
    </StyledBox>
  );
};

export default ReportsPageContent;
