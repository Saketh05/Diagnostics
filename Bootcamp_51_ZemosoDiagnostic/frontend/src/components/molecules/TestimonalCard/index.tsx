import {
  Card,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import theme from "../../../Theme/theme"

export interface TestimonalCardProps {
  name: string;
  city: string;
  review: string;
}

const CardStyled = styled(Card)`
  width: 382px;
  height: 172px;
  border-radius: 8px;

  & .grid {
    flex-wrap: nowrap;
  }
`;

const GridStyled = styled(Grid)<{margin: string}>`
  margin: ${(props) => props.margin};
`;

const TestimonalCard: React.FC<TestimonalCardProps> = ({
  name,
  city,
  review,
}) => {
  return (
    <CardStyled data-testid="testimonal-card" >
      <Grid container className="grid">
        <GridStyled item margin="22px 0px 0px 22px">
          <Avatar sx={{ backgroundColor: theme.palette.background1.main}}>
            <Logo name="avatar" />
          </Avatar>
        </GridStyled>
        <GridStyled item margin="20px 18px">
          <Grid>
            <Grid item>
              <Typography variant="overline" color={theme.palette.text2.main}>{name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption3" color={theme.palette.text3.main}>{city}</Typography>
            </Grid>
            <GridStyled item  margin="10px 0px 0px 0px">
              <Typography variant="caption4" color={theme.palette.text2.main}>{review}</Typography>
            </GridStyled>
          </Grid>
        </GridStyled>
      </Grid>
    </CardStyled>
  );
};

export default TestimonalCard;
