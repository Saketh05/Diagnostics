import { Dialog, DialogContent, Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";
import styled from "styled-components";
import CustomTextField from "../../molecules/TextField";
import CheckBoxLabel from "../../molecules/CheckBoxLabel";
import Button from "../../atoms/Button/Button";
import { ADD_NEW_CARD} from "../../../Constants";

interface AddCardProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const GridStyled = styled(Grid)<{ margin?: string }>`
  margin: ${(props) => props.margin};
`;

const BoxStyled = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: "100%";
`;

const AddCard: React.FC<AddCardProps> = ({
  open,
  setOpen,
}) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      data-testid="add-card"
      maxWidth="md"
      fullWidth={true}
    >
      <DialogContent>
        <BoxStyled onClick={handleClose} data-testid="close-btn">
          <Icon name="close" />
        </BoxStyled>
        <GridStyled margin="0px 0px 0px 59px">
          <GridStyled item margin="48px 0px 24px 0px">
            <Typography variant="subtitle1">{ADD_NEW_CARD}</Typography>
          </GridStyled>
          <GridStyled item margin="0px 0px 40px 0px">
            <CustomTextField
              label="Card Number"
              variant="standard"
            />
          </GridStyled>
          <GridStyled
            container
            margin="0px 0px 40px 0px"
            maxWidth="100%"
            columnGap="22px"
            wrap="nowrap"
          >
            <GridStyled item md={6}>
              <CustomTextField
                label="Expiry Date"
                variant="standard"
              />
            </GridStyled>
            <GridStyled item md={6}>
              <CustomTextField
                label="CVV"
                variant="standard"
              />
            </GridStyled>
          </GridStyled>
          <GridStyled margin="0px 0px 25px 0px">
            <CustomTextField label="Card Holder Name" variant="standard" />
          </GridStyled>
          <GridStyled margin="0px 0px 33px 0px">
            <CheckBoxLabel name="Save Card" />
          </GridStyled>
        </GridStyled>

        <GridStyled margin="0px 0px 38px 239px">
          <Button
            data-testid="add-card"
            name="Add Card"
            variant="contained"
            background="#6B4DE0"
            width="222px"
            height="42px"
            textcolor="white"
          />
        </GridStyled>
      </DialogContent>
    </Dialog>
  );
};

export default AddCard;
