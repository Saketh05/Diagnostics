import { Grid, IconButton, Menu, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon";
import CompanyLogo from "../../molecules/CompanyLogo";
import { LocationPicker } from "../../molecules/LocationPicker";
import theme from "../../../Theme/theme";
import { HOME, REPORT, APPOINTMENT } from "../../../Constants";
import Profile from "../Profile";

const HeaderStyled = styled(Grid)`
  width: 100%;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  & .company-logo {
    padding-left: 89px;
    margin-top: 13px;
    margin-bottom: 13px;
  }

  & .typography1 {
    margin-top: 12px;
    margin-bottom: 14px;
    text-decoration: none;
  }

  & .typography2 {
    margin-left: 32px;
    margin-top: 12px;
    margin-bottom: 14px;
    text-decoration: none;
  }

  & .location-picker {
    margin-top: 10px;
    margin-bottom: 12px;
  }

  & .icon1 {
    margin-left: 30px;

  }

  & .icon2 {
    margin-left: 20px;
    margin-top: 11px;
    margin-bottom: 11px;
  }

  & .navlink {
    text-decoration: none;
    color: ${theme.palette.text2.main};
  }
  & .active {
    color: ${theme.palette.blue[500]};
    border-bottom: 3px solid ${theme.palette.blue[500]};
  }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <HeaderStyled container data-testid="header">
        <Grid item className="company-logo" xs={4}>
          <CompanyLogo />
        </Grid>

        <Grid item container xs={4}>
          <Grid item className="typography1">
            <NavLink to="/home" className="navlink">
              <Typography variant="caption2">{HOME}</Typography>
            </NavLink>
          </Grid>
          <Grid item className="typography2">
            <NavLink to="/reports" className="navlink">
              <Typography variant="caption2">{REPORT}</Typography>
            </NavLink>
          </Grid>
          <Grid item className="typography2">
            <NavLink to="/appointments" className="navlink">
              <Typography variant="caption2">{APPOINTMENT}</Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Grid item container xs={4} alignItems="center">
          <Grid item className="location-picker" xs={7}>
            <LocationPicker location={"Mountain view, CA, USA"} />
          </Grid>
          <Grid item>
            <IconButton
              className="icon1"
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Icon name="user" />
            </IconButton>

          </Grid>
          <Grid item className="icon2">
            <Icon name="cart" />
          </Grid>
        </Grid>
      </HeaderStyled>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
          <Profile
            name={"Patrik Smith"}
            email={"patrik.smith@gmail.com"}
            phone={"+12345-10401-123"}
          />
      </Menu>
    </React.Fragment>
  );
};

export default Header;
