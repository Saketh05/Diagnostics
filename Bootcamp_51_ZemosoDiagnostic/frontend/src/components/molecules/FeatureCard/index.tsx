import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import theme from "../../../Theme/theme";
import { Icon, IconsProps} from "../../atoms/Icon/index";

export interface FeatureProps extends IconsProps{
  text1: string;
  text2: string;
}

const GridStyled = styled(Grid)`
  background-color: ${theme.palette.purple[50]};
  border-radius: 8px;
  height: 44px;
  width: 44px;
  margin-top: 10px;

  svg {
    margin: 3px 5px 0px 4px;
  }
`;

const FeatureCard: React.FC<FeatureProps> = ({ text1, text2,name }) => {
  return (
    <Grid container data-testid="feature-card" spacing={1}>
      <GridStyled item>
        <Icon name={name} />
      </GridStyled>
      <Grid item xs={4}>
        <Grid className="text">
          <Grid item>
            <Typography variant="body3">{text1}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body3">{text2}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeatureCard;
