import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";
import  {styled}  from "@mui/system";
export interface FaqProps {
  question: string;
  icon?: string;
}

const FaqStyled = styled(Grid)`
  background-color: #ffffff;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  justify-content: space-between;
  padding: 20px;
  align-items: flex-start;
  height:64px;
  & svg {
    margin: 4px;
  }
`;

const Faq: React.FC<FaqProps> = ({ question }) => {
  return (
    <FaqStyled container data-testid="faq" >
        <Typography variant="faq">{question}</Typography>
        <Icon name="arrowDown" />
    </FaqStyled>
  );
};

export default Faq;
