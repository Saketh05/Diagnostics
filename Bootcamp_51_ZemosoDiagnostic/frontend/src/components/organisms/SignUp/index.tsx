import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CompanyLogo from "../../molecules/CompanyLogo";
import CustomTextField from "../../molecules/TextField";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import Logo from "../../atoms/Logo";
import { useAuth0 } from "@auth0/auth0-react";

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 26px 0px #e9e8ed80;
  width: 382px;
  border-radius: 8px;

  & .companyLogo {
    margin-bottom: 16px;
    > div span {
      color: ${theme.palette.blue[500]};
    }
  }

  & .cardContent {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin: 0px 4px 4px 4px;
  }
  & Button {
    text-transform: none;
    border-radius: 8px;
  }
  & .button {
    width: 342px;
    height: 42px;
    background: ${theme.palette.blue[500]};

    :hover {
      background: ${theme.palette.blue[500]};
    }
  }
  & .cardActions {
    display: flex;
    flex-direction: column;
    row-gap: 13px;
  }
  & .boxTextFiled {
    display: flex;
    column-gap: 44px;
    margin-bottom: 40px;
  }
  & .boxSignUp {
    display: flex;
    align-items: center;
    width: 334px;
    column-gap: 10px;
    margin-top: 28px;
    color: ${theme.palette.grey1[300]};
    > hr {
      width: 115px;
      color: ${theme.palette.grey1[100]};
    }
  }
  & .login {
    color: ${theme.palette.text1.main};
  }
  & .buttonState {
    background: ${theme.palette.blue[100]};
    color: ${theme.palette.textButton.main};
    :hover {
      background: ${theme.palette.blue[100]};
    }
  }
  & .typo {
    color: ${theme.palette.text3.main};
  }
`;
const StyledCardHeader = styled(CardHeader)`
        width: 180px;
        margin: 0 auto;
        margin-top:24px;--
        & .MuiCardHeader-avatar{
            width:180px;
            height:20px;
        }
`

const SignUp = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue({
      ...value,
      [event.target.name]: val,
    });
  };
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledCard data-testid="SignUp">
      <StyledCardHeader
        avatar={
          <Box className="companyLogo">
            <CompanyLogo />
          </Box>
        }
      />
      <CardContent className="cardContent">
        <CustomTextField
          name="firstName"
          label="First Name"
          variant="standard"
          placeholder="eg: Patrick"
          value={value.firstName}
          onChange={handleChange}
        />
        <CustomTextField
          name="lastName"
          label="Last Name"
          variant="standard"
          placeholder="eg: Smith"
          value={value.lastName}
          onChange={handleChange}
        />
        <CustomTextField
          name="email"
          label="Email id"
          variant="standard"
          placeholder="eg: patricksmith@gmail.com"
          value={value.email}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions className="cardActions">
        <Button
          variant="contained"
          className={
            !!value.firstName && !!value.lastName && !!value.email
              ? "button"
              : "button buttonState"
          }
        >
          Continue
        </Button>
        <Box>
          <Typography variant="payment" className="typo">
            Already have an account?
          </Typography>
          <Button
            variant="text"
            className="login"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        </Box>
        <Box className="boxSignUp">
          <Divider />
          <Typography variant="overlineR">or sign up with</Typography>
          <Divider />
        </Box>
        <Box className="boxTextFiled">
          <Logo name="google" />
          <Logo name="facebook" />
          <Logo name="apple" />
        </Box>
      </CardActions>
    </StyledCard>
  );
};

export default SignUp;
