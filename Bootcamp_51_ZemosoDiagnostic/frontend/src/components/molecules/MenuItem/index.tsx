import React from "react";
import { Icon, IconsProps } from "../../atoms/Icon";
import styled from "styled-components";
import theme from "../../../Theme/theme";
import {  CardHeader, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardHeaderStyled = styled(CardHeader)`

  :hover {
    cursor: pointer;
  }

  & .MuiCardHeader-avatar {
    align-self: ${(props) => (props.subheader ? "flex-start" : "center")};
    margin-right: 8px;
  }
  & .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${theme.palette.text2.main};
  }
  & .subheader {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${theme.palette.text3.main};
  }
`;

export interface MenuItemProps {
  iconName: IconsProps["name"];
  title: string;
  subHeader?: string;
  path: string;
  onClick?: () => void;
}

export const MenuItem = ({
  iconName,
  title,
  subHeader,
  path,
}: MenuItemProps) => {

  const navigate = useNavigate();

  return (
      <CardHeaderStyled
      onClick={()=> {navigate(path)}}
        avatar={<Icon name={iconName} />}
        action={
          <IconButton aria-label="settings">
            <Icon name="chevronRight" />
          </IconButton>
        }
        title={<Typography className="title">{title}</Typography>}
        subheader={
          subHeader ? (
            <Typography className="subheader">{subHeader}</Typography>
          ) : undefined
        }
      />
  );
};
