import { Button, Card, CardHeader, Checkbox, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import { SelectPatientContext } from "../../../store/Store";

export interface SelectPatientCardProps {
  id?: number;
  title: string;
  subtitle: string;
  handleChange(flag: boolean, id:number): void;
}

const StyledCard = styled(Card)`
  box-shadow: none;
  & svg {
    color: ${theme.palette.purple[800]};
  }
  & .MuiTypography-payment {
    color: ${theme.palette.text1.main};
  }
  & .MuiTypography-overline2 {
    color: ${theme.palette.text3.main};
  }
  & Button {
    color: ${theme.palette.blue[500]};
  }
  & .cardHeader {
    & .MuiCardHeader-avatar {
      position: relative;
      bottom: 7px;
    }
  }
`;

const SelectPatientCard = (props: SelectPatientCardProps) => {
  const {selectPatient} = useContext(SelectPatientContext);
  const [checked, setChecked] = useState(selectPatient.find((element) => element===props.id) !== undefined);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id?: number) => {
    setChecked(event.target.checked);
    id && props.handleChange(event.target.checked, id);
  };
  return (
    <StyledCard>
      <CardHeader
        className="cardHeader"
        avatar={<Checkbox checked={checked} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event,props.id)} />}
        title={
          <Typography variant="payment" component="div">
            {props.title}
          </Typography>
        }
        subheader={
          <Typography variant="overline2" component="div">
            {props.subtitle}
          </Typography>
        }
        action={
          <Button disableRipple variant="text">
            <Typography variant="overline">Edit</Typography>
          </Button>
        }
      />
    </StyledCard>
  );
};

export default SelectPatientCard;
