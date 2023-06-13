import { Card, Grid, Radio, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface AddressCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  address: React.ReactNode;
  isSelected: boolean;
}

const CardStyled = styled(Card)`
  height: 128px;
  border-radius: 8px;
  box-shadow: 0px 0px 26px 0px rgba(233, 232, 237, 0.5);

`;

const GridStyled = styled(Grid)<{ margin?: string }>`
  margin: ${(props) => props.margin};
`;

const AddressCard: React.FC<AddressCardProps> = ({
  title,
  content,
  address,
  isSelected,
}) => {
  return (
    <CardStyled data-testid="address-card">
      <GridStyled>
        <GridStyled margin="12px">
          <Typography variant="overline2">{title}</Typography>
        </GridStyled>
        <GridStyled item margin="12px 0px 0px 12px">
          <Typography variant="caption2">{content}</Typography>
        </GridStyled>
        <GridStyled container>
          <GridStyled item xs={10}  margin="12px">
            <Typography variant="caption" id="address">{address}</Typography>
          </GridStyled>
          <GridStyled>
            <Radio color="secondary" checked={isSelected} />
          </GridStyled>
        </GridStyled>
      </GridStyled>
    </CardStyled>
  );
};

export default AddressCard;
