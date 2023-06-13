import {
  Card,
  CardContent,
  styled,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import Logo from "../../atoms/Logo";

const StyledBox = styled(Box)`
  background-color: ${theme.palette.purple[50]};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin-right: 24px;
`;

const StyledCard = styled(Card)`
  width: 382px;
  height: 76px;
`;

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  margin-top: -6px;
  color: ${theme.palette.text2.main};
`;

export interface CardProps {
  iconName: "test" | "home" | "labTechnician" | "reports" | "award" | "shield";
  text: string;
}

const WhyChooseUsCard: React.FC<CardProps> = ({ iconName, text }) => {
  return (
    <StyledCard elevation={0} data-testid="card">
      <CardContent>
        <StyledGrid>
          <StyledBox>
            <Logo name={iconName} margin="5px 5px 5px 7px" />
          </StyledBox>
          <Typography variant="caption2">{text}</Typography>
        </StyledGrid>
      </CardContent>
    </StyledCard>
  );
};

export default WhyChooseUsCard;
