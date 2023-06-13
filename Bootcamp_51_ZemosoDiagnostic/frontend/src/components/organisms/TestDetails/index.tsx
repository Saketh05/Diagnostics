import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";
import FeatureCard, { FeatureProps } from "../../molecules/FeatureCard";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import CircleIcon from "@mui/icons-material/Circle";
import { TestInfo } from "../../molecules/TestInfo";

interface TestDetailsProps {
  title: string;
  featureCards: FeatureProps[];
  cost: string;
  time: string;
  testDesc: string[];
  packageDesc: string[];
}

export const details: FeatureProps[] = [
  { text1: "home", text2: "visit", name: "home" },
  { text1: "1 test", text2: "included", name: "test" },
  { text1: "Free", text2: "consultation", name: "doctor" },
  { text1: "Online", text2: "reports", name: "reports" },
];

export const testDescription = [
  "This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.",
  "Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.",
  "Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ",
  "Municipal corporation guidelines.",
];
export const packageDescription = [
  "To check if you have an active COVID-19 infection",
  "If you are showing symptoms of COVID-19 infection",
  "If you had a contact with someone with confirmed COVID-19",
];

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 26px 0px #e9e8ed80;
  border-radius: 8px;

  & .feature {
    width: 134px;
  }
  & .featureGrid {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  & .typo {
    color: ${theme.palette.text1.main};
  }
  & .typo1 {
    margin-left: 5px;
    color: ${theme.palette.text1.main};
  }
  & .typo2 {
    color: ${theme.palette.text2.main};
  }
  & .typo3 {
    color: ${theme.palette.text3.main};
  }
  & .descritpionBox {
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #e9e8ed;
    width: 380px;
  }
  & .dot {
    width: 6px;
    height: 6px;
    fill: ${theme.palette.grey1[500]};
    margin-left: 24px;
    margin-right: 24px;
  }
  & ul li {
    margin-bottom: 8px;
    color: ${theme.palette.grey1[500]};
  }
  & ul {
    padding-left: 18px;
  }
  & .packageBox {
    display: flex;
    column-gap: 16px;
    margin-top: 8px;
  }
  & .title {
    margin-bottom: 8px;
  }
`;

const TestDetails = (props: TestDetailsProps) => {
  return (
    <StyledCard>
      <CardHeader
        className="title"
        title={
          <Typography variant="subtitle1" className="typo">
            {props.title}
          </Typography>
        }
      />
      <CardContent>
        <Grid container className="featureGrid">
          {props.featureCards.map((card, index) => {
            return (
              <Grid item className="feature" key={index}>
                <FeatureCard
                  name={card.name}
                  text1={card.text1}
                  text2={card.text2}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box className="descritpionBox">
          <Icon name="dollar" />
          <Typography variant="overlineR" className="typo">
            Starting from {props.cost}
          </Typography>
          <CircleIcon className="dot" />
          <Icon name="clock" />
          <Typography variant="overlineR" className="typo1">
            Reports ready in {props.time} Hours
          </Typography>
        </Box>
        <ul>
          {props.testDesc.map((testDetails, index) => {
            return (
              <li tabIndex={index} key={index}>
                <Typography variant="overlineR" className="typo2">
                  {" "}
                  {testDetails}
                </Typography>
              </li>
            );
          })}
        </ul>

        <Typography variant="caption1" className="typo3">
          Why you should book this package?
        </Typography>
        <Box className="packageBox">
          {props.packageDesc.map((desc) => {
            return <TestInfo text={desc} key={desc} />;
          })}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default TestDetails;
