import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Banner } from "../../molecules/Banner";
import SearchBox from "../../molecules/SearchBox";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import {
  chooseTests,
  COMMANLY_BOOKED_TESTS,
  commonlyBookedTests,
  question,
  SEE_MORE,
  testimonials,
  whyChooseUs,
  WHY_CHOOSE_US,
  TESTS_YOU_CAN_CHOOSE_FROM,
  FREQUENTLY_ASKED_QUESIONS,
  CUSTOMER_TESTIMONALS,
} from "../../../Constants";
import { Box } from "@mui/system";
import { CommonlyBookedTestCard } from "../../molecules/CommonlyBookedTestCard";
import ChooseTestCard from "../../molecules/ChooseTestCard";
import WhyChooseUsCard from "../../molecules/WhyChooseUsCard";
import TestimonalCard from "../../molecules/TestimonalCard";
import Faq from "../../molecules/Faq";

const MainContentStyled = styled(Grid)`
  & .search {
    margin: 40px 90px 32px 90px;
  }

  & .banner {
    margin: 0px 90px 72px 90px;
  }

  & .text-1 {
    margin: 0px 0px 32px 90px;
  }

  & .text-2 {
    color: ${theme.palette.blue[500]};
  }

  & .text-3 {
    margin: 0px 0px 32px 90px;
  }

  & .test-card-grid {
    margin: 32px 0px 90px 0px;
  }

  & .test-card {
    margin-bottom: 18px;
    padding-bottom:16px;
    box-shadow: 0px 0px 8px rgba(233, 232, 237, 0.5);
    border: 1px solid #fff;
    border-radius: 8px;
  }

  & .why-choose-us-grid {
    height: 356px;
    background: ${theme.palette.blue[800]};
    margin-bottom: 80px;
  }

  & .why-choose-us-text-grid {
    margin: 60px 0px 32px 90px;
  }

  & .why-choose-us-text {
    color: ${theme.palette.background1.main};
  }

  & .why-choose-us-cards-grid {
    padding-left: 90px;
  }

  & .why-choose-us-cards {
    margin-bottom: 20px;
  }

  & .choose-test-grid {
    margin-top: 32px;
    margin-bottom: 80px;
    padding-left: 90px;
  }

  & .testimonal {
    height: 384px;
    background: ${theme.palette.blue[800]};
    margin-bottom: 80px;
  }

  & .faq {
    margin: 80px 0px 0px 90px;
    margin-bottom: 32px;
  }

  & .faq-grid {
    margin-bottom: 80px;
    padding-left: 90px;
    margin-right: 90px;
  }

  & .icons {
    svg {
      path {
        stroke: ${theme.palette.blue[500]};
      }
    }
  }
`;

const MainContent = () => {
  return (
    <MainContentStyled data-testid="main-content">
      <Grid>
        <Grid item className="search">
          <SearchBox />
        </Grid>

        <Grid item className="banner">
          <Banner />
        </Grid>

        <Grid item container>
          <Grid item xs={11}>
            <Typography variant="home" className="text-1">
              {COMMANLY_BOOKED_TESTS}
            </Typography>
          </Grid>
          <Grid container xs={1}>
            <Grid item>
              <Typography variant="caption2" className="text-2">
                {SEE_MORE}
              </Typography>
            </Grid>
            <Grid item className="icons">
              <Icon name="chevronsRight" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="test-card-grid" rowSpacing="18px">
          {commonlyBookedTests.map((item) => (
            <Grid item className="test-card" key={item.text} xs={3}>
              <CommonlyBookedTestCard
                logoName={item.logoName}
                text={item.text}
                path={item.path}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Card className="why-choose-us-grid">
        <Grid item className="why-choose-us-text-grid">
          <Typography variant="home" className="why-choose-us-text">
            {WHY_CHOOSE_US}
          </Typography>
        </Grid>

        <Grid container className="why-choose-us-cards-grid">
          {whyChooseUs.map((item) => (
            <Grid className="why-choose-us-cards" key={item.text} xs={4}>
              <WhyChooseUsCard iconName={item.iconName} text={item.text} />
            </Grid>
          ))}
        </Grid>
      </Card>

      <Grid item container>
        <Grid item xs={11}>
          <Typography variant="home" className="text-3">
            {TESTS_YOU_CAN_CHOOSE_FROM}
          </Typography>
        </Grid>

        <Grid container xs={1}>
          <Grid item>
            <Typography variant="caption2" className="text-2">
              {SEE_MORE}
            </Typography>
          </Grid>
          <Grid item className="icons">
            <Icon name="chevronsRight" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container className="choose-test-grid" wrap="nowrap">
        {chooseTests.map((item) => (
          <Grid className="choose-us-cards" key={item.title} xs={4}>
            <ChooseTestCard
              image={item.image}
              title={item.title}
              priceDesc={item.priceDesc}
              timeDesc={item.timeDesc}
              noOfTests={item.noOfTests}
              action={item.action}
            />
          </Grid>
        ))}
      </Grid>

      <Card className="testimonal">
        <Grid className="why-choose-us-text-grid">
          <Typography variant="home" className="why-choose-us-text">
            {CUSTOMER_TESTIMONALS}
          </Typography>
        </Grid>

        <Grid container className="why-choose-us-cards-grid" wrap="nowrap">
          {testimonials.map((item) => (
            <Grid className="choose-us-cards" key={item.review} xs={4}>
              <TestimonalCard
                name={item.name}
                city={item.city}
                review={item.review}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
      <Box className="faq">
        <Typography variant="home">{FREQUENTLY_ASKED_QUESIONS}</Typography>
      </Box>
      <Grid className="faq-grid">
        {question.map((item) => (
          <Box className="faq-box" key={item.question}>
            <Faq question={item.question} />
          </Box>
        ))}
      </Grid>
    </MainContentStyled>
  );
};

export default MainContent;
