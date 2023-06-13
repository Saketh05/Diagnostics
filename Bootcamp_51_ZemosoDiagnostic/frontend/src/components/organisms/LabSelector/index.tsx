import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Add from "@mui/icons-material/Add";

import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import LabCard from "../../molecules/LabCard";

import { SELECT_LAB, SORT } from "../../../Constants";

const LabCardStyled = styled(Card)`

  width: 583px;
  height: 560px;
  border-radius: 8px;
  & .button {
    margin-top: 16px;
    margin-left: 447px;
    margin-bottom: 20px;
  }

  & .selection-grid {
    margin-bottom: 24px;
  }

  & .select-lab {
    margin-left: 24px;
    margin-right: 397px;
  }

  & .lab-card {
    margin-left: 24px;
    margin-bottom: 16px;
  }
`;


const LabSelector = () => {
  const [active, setActive] = useState<string>("first");

  const handleChange = (id: string) => {
    setActive(id);
  };
  return (
    <LabCardStyled data-testid="lab-selector">
      <Grid>
        <Grid item className="button">
          <Button
            name="Add Test"
            startIcon={<Add />}
            textcolor={theme.palette.blue[500]}
          />
        </Grid>
        <Grid container className="selection-grid">
          <Grid item className="select-lab">
            <Typography variant="button">{SELECT_LAB}</Typography>
          </Grid>
          <Grid item>
            <Icon name="sort" />
          </Grid>
          <Grid item>
            <Typography variant="caption2">{SORT}</Typography>
          </Grid>
        </Grid>
        <Grid item className="lab-card">
          <LabCard
            labId="first"
            labName="Los Altos Center Lab"
            labRating="4.3"
            noOfSlots="4 Slots Available"
            info="Reports ready in 24 hrs"
            cost="$1200 for 1 Test"
            onClick={handleChange}
            active={active}
            testid="card-1"
          />
        </Grid>
        <Grid item className="lab-card">
          <LabCard
            labId="second"
            labName="Los Altos Center Lab"
            labRating="4.3"
            noOfSlots="4 Slots Available"
            info="Reports ready in 24 hrs"
            cost="$1200 for 1 Test"
            onClick={handleChange}
            active={active}
          />
        </Grid>
      </Grid>
    </LabCardStyled>
  );
};

export default LabSelector;
