import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import Button from "../../atoms/Button/Button";
import Family from "../../../../public/assets/images/family.svg";
import { TEXTS } from "../../../Constants";

const GridStyled = styled(Grid)`
  background-color: ${theme.palette.blue[800]};
  border-radius: 12px;
  & .leftcontent {
    margin: 2.5rem 3rem;
    & #h1,
    .tagline {
      color: ${theme.palette.background1.main};
    }
    & button {
      margin-top: 2.6rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
  & .rightContent {
    margin: 13px 0px;
    margin-left: auto;
    margin-right: 5.5rem;
  }
`;

export const Banner = () => {
  return (
    <GridStyled container data-testid="banner">
      <Grid item md={4} className="leftcontent">
        <Typography variant="home" id="h1">{TEXTS.offer}</Typography>
        <Typography variant="caption2" className="tagline" component="p">
          {TEXTS.tagline}
        </Typography>
        <Button
          variant="contained"
          name={TEXTS.bookNow}
          background={theme.palette.background1.main}
          textcolor={theme.palette.blue[800]}
        />
      </Grid>
      <Grid item className="rightContent">
        <Family />
      </Grid>
    </GridStyled>
  );
};
