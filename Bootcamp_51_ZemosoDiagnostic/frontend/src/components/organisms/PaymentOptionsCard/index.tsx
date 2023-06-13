import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreditCard, { CreditCardProps } from "../../molecules/CreditCard";
import PaymentOption from "../../molecules/PaymentOption";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import { LogoProps } from "../../atoms/Logo";
import AddCard from "../AddCard";
import { CREDIT_CARD } from '../../../Constants';

interface List {
  company: string;
  name: LogoProps["name"];
}

interface PaymentOptionsCardProps extends CreditCardProps{
  list: List[];
}

export const PaymentDetails:List[] = [
  { company: "Paypal", name: "payPal" },
  { company: "Google Pay", name: "gpay" },
  { company: "Net Banking", name: "netBanking" },
];

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 26px 0px #e9e8ed80;
  padding: 8px;
  & .PaymentBox {
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 562px;
    padding-left: 15px;
    row-gap: 17px;
  }
  & .typo {
    margin: 16px 0px 15px 24px; 
    text-transform: none;
    color: ${theme.palette.text1.main};
  }
  & .typo2 {
    color: ${theme.palette.text2.main};
  }
  & Button {
    color: ${theme.palette.blue[500]};
    > span {
      text-transform: none;
    }
  }
  & #creditcard{
    margin: 40px 20px;
  }
  & .MuiCardContent-root {
    padding: 0px;
  }
`;

const PaymentOptionsCard = (props: PaymentOptionsCardProps) => {
  const [checked, setChecked] = useState("");
 
  const [open,setOpen] = useState(false);

  const handleChange = (company: string) => {
    setChecked(company);
  };

  const handleAddCard = () => {
    setOpen(true);
  }

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="subtitle1" className="typo2">
            Card Details
          </Typography>
        }
        action={
          <Button startIcon={<AddIcon />} onClick={handleAddCard} data-testid="add-card">
            <Typography variant="button">Add Card</Typography>
          </Button>
        }
      />
      <CardContent>
        <Box id="creditcard"><CreditCard cardNum={CREDIT_CARD.cardNum} cardHolder={CREDIT_CARD.cardHolder} expiryDate={CREDIT_CARD.expiryDate} /></Box>
        <Typography variant="button" className="typo" component="div">
          Other Payment Options
        </Typography>
      </CardContent>
      <CardActions>
        <Box className="PaymentBox">
          {props.list.map((obj, index) => {
            return (
              <PaymentOption
                key={index}
                ischecked={checked === obj.company ? true : false}
                onClick={handleChange}
                company={obj.company}
                name={obj.name}
              />
            );
          })}
        </Box>
        <Box><AddCard open={open} setOpen={setOpen} /></Box>
      </CardActions>
    </StyledCard>
  );
};

export default PaymentOptionsCard;
