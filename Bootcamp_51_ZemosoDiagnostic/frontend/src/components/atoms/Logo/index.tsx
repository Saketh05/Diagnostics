import { Box, styled } from "@mui/material";
import React from "react";
import { Logos } from "../../../Constants";

export interface LogoProps {
  name:
    | "avatar"
    | "award"
    | "bloodTest"
    | "body"
    | "covid"
    | "diabetesTest"
    | "home"
    | "kidney"
    | "labTechnician"
    | "labcrop"
    | "lipid"
    | "liver"
    | "pdf"
    | "pdfFilled"
    | "reports"
    | "shield"
    | "test"
    | "throid"
    | "zemosologo"
    | "payPal"
    | "altos"
    | "star"
    | "google"
    | "apple"
    | "facebook"
    | "gpay"
    | "netBanking"
    | "creditCard";

  margin?: string;
}

const StyledDiv = styled(Box)<{ margin?: string }>`
  margin: ${(props) => props.margin};
`;

const Logo: React.FC<LogoProps> = ({ name, margin }) => {
  return (
    <StyledDiv data-testid={`logo-${name}`} className="logo" margin={margin}>
      {Logos[name]}
    </StyledDiv>
  );
};

export default Logo;