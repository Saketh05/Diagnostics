import { Grid, Radio, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Logo, { LogoProps } from "../../atoms/Logo";

export interface PaymentOptionProps extends LogoProps {
  company: string;
  ischecked: boolean;
  onClick: (company:string) => void;
}

const PaymentOptionStyled = styled(Grid)`
  width: 482px;
  display: flex;
  flex-direction: row;
`;

const RadioStyled = styled(Radio)`
  margin-top: -11px;
`;

const GridStyled = styled(Grid)`
  margin-top: -5px;
`;

const PaymentOption: React.FC<PaymentOptionProps> = ({
  company,
  name,
  ischecked,
  onClick
}) => {
  return (
    <PaymentOptionStyled container data-testid="paymentoption" onClick={() => onClick(company)}>
      <GridStyled item xs={1}>
        <Logo name={name} />
      </GridStyled>
      <Grid item xs={9}>
        <Typography variant="payment">{company}</Typography>
      </Grid>
      <Grid item xs={1}>
        <RadioStyled checked={ischecked} color="secondary" />
      </Grid>
    </PaymentOptionStyled>
  );
};

export default PaymentOption;
