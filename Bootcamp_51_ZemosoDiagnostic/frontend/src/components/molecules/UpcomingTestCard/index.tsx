import React from "react";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon";
import Logo, { LogoProps } from "../../atoms/Logo";
import { CardHeader, IconButton, Typography } from "@mui/material";
import theme from "../../../Theme/theme";

const StyledCardHeader = styled(CardHeader)`
  padding: 0px;
  box-shadow: 0px 0px 12px rgba(233, 232, 237, 0.53);
  border-radius: 8px;
  margin-bottom: 26px;
  & .MuiCardHeader-avatar {
    align-self: flex-start;
  }
  & .MuiCardHeader-action {
    display: flex;
    gap: 0.5rem;
    align-self: center;
  }
  & .MuiCardHeader-subheader {
    margin-top: 1rem;
  }
  & .testinfo {
    color: ${theme.palette.text1.main};
    & .lab {
      font-weight: 400;
    }
  }
  & .patientName,
  & .MuiCardHeader-subheader {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${theme.palette.text2.main};
  }
`;

export interface UpcomingTestCardProps {
  logoName: LogoProps["name"];
  testName: string;
  labName: string;
  patientName: string;
  appointmentSlot: string;
}

export const UpcomingTestCard = ({
  logoName,
  testName,
  labName,
  patientName,
  appointmentSlot,
}: UpcomingTestCardProps) => {
  return (
    <StyledCardHeader
      data-testid="upcomingTestCard"
      avatar={<Logo name={logoName} />}
      action={
        <>
          <IconButton>
            <Icon name="share" />
          </IconButton>
          <IconButton>
            <Icon name="download" />
          </IconButton>
        </>
      }
      title={
        <>
          <Typography className="testinfo" variant="caption2">
            {testName}- <span className="lab">{labName}</span>
          </Typography>
          <Typography className="patientName">{patientName}</Typography>
        </>
      }
      subheader={appointmentSlot}
    />
  );
};
