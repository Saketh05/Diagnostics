import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../../Theme/theme";

interface BottomNavigationProps {
  buttonName: string;
  typo?: React.ReactNode;
  cancelLink?: string;
  buttonLink: string;
  handleNext?: () => void;
}

const StyledBox = styled(Box)<{ variant?: string }>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  box-shadow: 0px -10px 6px rgba(0, 0, 0, 0.06);
  padding: 14px 90px;
  background: ${theme.palette.background1.main};
  justify-content: ${(props) =>
    props.variant === "singleButton" ? "flex-end" : "flex-start"};
  & .link {
    flex: 1;
    text-decoration: none;
    color: ${theme.palette.alerts[200]};
  }
  & Button {
    width: 222px;
    height: 42px;
    margin-left: 24px;
    border-radius: 8px;
    background: ${theme.palette.blue[500]};
    :hover {
      background: ${theme.palette.blue[500]};
    }
  }
`;

const BottomNavigation = (props: BottomNavigationProps) => {
  const navigate = useNavigate();
  const handleNextClick = () =>{
    props.handleNext && props.handleNext();
    navigate(props.buttonLink)
  }
  return (
    <StyledBox variant={props.cancelLink ? "" : "singleButton"}>
      {props.cancelLink && (
        <Link className="link" to={props.cancelLink}>
          Cancel
        </Link>
      )}

      {props.typo}
      <Button variant="contained" onClick={handleNextClick}>
        {props.buttonName}
      </Button>
    </StyledBox>
  );
};

export default BottomNavigation;