import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

const HeaderStyled = styled(Grid)`
  height: 58px;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: ${theme.palette.background1.main};
`;
interface TemplateHomePageProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
  content: React.ReactNode;
}

const TemplateHomePage = (props: TemplateHomePageProps) => {
  return (
    <Grid container direction="column" >
      <HeaderStyled>{props.header}</HeaderStyled>
      <Grid item>{props.content}</Grid>
      <Grid item>{props.footer}</Grid>
    </Grid>
  );
};

export default TemplateHomePage;