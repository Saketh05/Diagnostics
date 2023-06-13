import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme/theme";
import CompanyLogo from "../../molecules/CompanyLogo";
import CustomTextField from "../../molecules/TextField";
import { ENTER_YOUR_MOBILE_NO, ENTER_OTP_TEXT, OTP } from "../../../Constants";
import { OtpInputField } from "../OTPInputField";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import userService from "../../../api-service/UserService/UserService";

const StyledCard = styled(Card)`
  box-shadow: 0px 0px 26px 0px #e9e8ed80;
  width: 382px;
  height: 544px;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
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
    margin: 0px 4px 4px 4px;
    & .MuiInput-input {
      color: ${theme.palette.text1.main};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      padding-top: 12px;
    }
  }
  & Button {
    text-transform: none;
    border-radius: 8px;
  }
  & .button {
    width: 334px;
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
    margin: 34px 24px 0px 24px;

    & .Mui-disabled {
      background: ${theme.palette.blue[100]};
      color: ${theme.palette.textButton.main};
    }
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

  & .mobile {
    color: ${theme.palette.text3.main};
    margin-bottom: 98px;
    margin-top: 4px;
  }

  & .otp {
    color: ${theme.palette.text3.main};
    margin-bottom:14px;
  }
`;
const StyledCardHeader = styled(CardHeader)`
  width: 180px;
  margin: 0 auto;
  margin-top: 24px;
  & .MuiCardHeader-avatar {
    width: 180px;
    height: 20px;
  }
`;

export interface UserType {
  userId: string;
  userName: string;
  phoneNo: string;
  email: string;
}

const MobileVerification: React.FC = () => {
  const { user } = useAuth0();

  const [value, setValue] = useState({
    mobileno: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue({
      mobileno: val,
    });
  };

  useEffect(() => {
    checkUserStatus();
  });
  const [otp, setOtp] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();

  const checkUserStatus = async () => {
    const userData = await userService.getAllUsers();

    if (user?.sub != undefined) {
      const auth0Id = user.sub;
      const tempUser = userData?.find((ele) => ele.userId === auth0Id);
      if (tempUser != undefined) {
        navigate("/home");
      }
    }
  };

  const handleVerify = async () => {
    if (!!user?.sub && !!user?.name && !!user?.email) {
      const userTemp: UserType = {
        userId: user.sub,
        userName: user.name,
        email: user.email,
        phoneNo: value.mobileno,
      };

      await userService.saveUser(userTemp).then(() => navigate("/home"));
    }
  };

  return (
    <StyledCard data-testid="mobile-verification">
      <StyledCardHeader
        avatar={
          <Box className="companyLogo">
            <CompanyLogo />
          </Box>
        }
      />
      <CardContent className="cardContent">
        <Typography variant="button" sx={{ marginBottom: "0px" }}>
          Hey {user ? user.name : ""}
        </Typography>

        {!active ? (
          <>
            <Typography variant="payment" className="mobile">
              {ENTER_YOUR_MOBILE_NO}
            </Typography>
            <CustomTextField
              name="Mobile Number"
              label="Mobile Number"
              variant="standard"
              placeholder="+1 (330) 617-3324"
              value={value.mobileno}
              onChange={handleChange}
            />
            <CardActions className="cardActions">
              <Button
                variant="contained"
                onClick={() => {
                  setActive(true);
                }}
                disabled={value.mobileno ? false : true}
                className={value.mobileno ? "button" : "button buttonState"}
              >
                Get OTP
              </Button>
            </CardActions>
          </>
        ) : (
          <>
            <Typography variant="payment" className="mobile">
              {ENTER_OTP_TEXT}
            </Typography>
            <Typography variant="review2" className="otp">
              {OTP}
            </Typography>
            <OtpInputField setOtp={setOtp} />
            <CardActions className="cardActions">
              <Button
                variant="contained"
                disabled={otp.length !== 3}
                className={otp.length !== 3 ? "button" : "button buttonState"}
                onClick={() => handleVerify()}
              >
                Verify
              </Button>
            </CardActions>
          </>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default MobileVerification;
