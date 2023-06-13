import React from "react";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon";
import Logo from "../../atoms/Logo";
import {
  Box,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import theme from "../../../Theme/theme";
import { TEXTS } from "../../../Constants";

const StyledCardHeader = styled(CardHeader)`
  border: 1px solid #f6f5f7;
  border-radius: 8px;
  box-shadow: 0px 0px 12px rgba(233, 232, 237, 0.53);
  & .MuiCardHeader-title {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  & .labName {
    color: ${theme.palette.text2.main};
  }
  & .testName {
    color: ${theme.palette.text1.main};
  }
  & .time {
    display: flex;
    gap: 0.5rem;
    color: ${theme.palette.text3.main};
    & .MuiDivider-root {
      color: ${theme.palette.grey1[100]};
    }
  }
  & .pending {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${theme.palette.alerts[500]};
    height: 18px;
    & .MuiSvgIcon-root {
      width: 16px;
      height: 16px;
      & path {
        stroke: ${theme.palette.alerts[500]};
      }
    }
  }
`;

export interface ReportCardProps {
  testName: string;
  labName: string;
  appointmentDate?: string;
  appointmentTime?: string;
  variant: "completed" | "upcoming";
}

export const ReportCard = (props: ReportCardProps) => {
  const { testName, labName, appointmentDate, appointmentTime, variant } =
    props;
  return (
    <StyledCardHeader
      data-testid="reportCard"
      avatar={<Logo name={variant === "completed" ? "pdfFilled" : "pdf"} />}
      action={
        variant === "completed" && (
          <IconButton>
            <Icon name="download" />
          </IconButton>
        )
      }
      title={
        <>
          <Typography className="labName" variant="caption1" component="p">
            {labName}
          </Typography>
          <Typography className="testName" variant="payment" component="p">
            {testName}
          </Typography>
          {variant === "completed" ? (
            <Typography variant="overlineR" className="time">
              <span data-testid="appointmentDate">{appointmentDate}</span>
              <Divider orientation="vertical" flexItem />
              <span data-testid="appointmentTime"> {appointmentTime}</span>
            </Typography>
          ) : (
            <Box className="pending">
              <Icon name="clock" />
              <Typography variant="payment" data-testid="payment">
                {TEXTS.pending}
              </Typography>
            </Box>
          )}
        </>
      }
    />
  );
};
