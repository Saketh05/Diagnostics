import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Illustration from "../../atoms/Illustration";
import Button from "../../atoms/Button/Button";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";
import { MenuItem } from "../../molecules/MenuItem";

import { LOGOUT_MENU_ITEM, menuItems } from "../../../Constants";
import Avatar from "../../../../public/assets/images/Avatar.png";
import { Box } from "@mui/system";
import { useAuth0 } from "@auth0/auth0-react";

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}

const ProfileStyled = styled(Card)`
  width: 673px;
  height: 797px;
  box-shadow: 0px 0px 12px 0px #e9e8ed87;
  border: 1px solid #f8f8fa;
  & .avatar {
    margin-top: 17px;
    margin-left: 131px;
    margin-right: 12px;
  }

  & .info {
    margin-top: 14px;
    margin-right: 181px;
    margin-bottom: 44px;
  }

  & .button {
    margin-top: 32px;
  }

  & .cross {
    margin-top: 32px;
    margin-left: 617px;
  }

  & .menu-tab {
    margin-left: 52px;
  }
`;

const Profile: React.FC<ProfileProps> = ({ name, email, phone }) => {
  const { logout } = useAuth0();

  return (
    <ProfileStyled data-testid="profile">
      <Grid container>
        <Grid item className="cross">
          <Icon name="close" />
        </Grid>
        <Grid item className="avatar">
          <Illustration image={Avatar} />
        </Grid>
        <Grid className="info">
          <Grid item>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="overlineR">{email}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="overlineR">{phone}</Typography>
          </Grid>
        </Grid>
        <Grid item className="button">
          <Button name="Edit" textcolor={theme.palette.blue[500]} />
        </Grid>
      </Grid>
      <Grid>
        <Grid item className="menu-tab">
          {menuItems.map((item) => (
            <Box key={item.title}>
              <MenuItem
                iconName={item.iconName}
                title={item.title}
                subHeader={item.subHeader}
                path={item.path}
              />
            </Box>
          ))}
          <Box onClick={() => logout({ returnTo: window.location.origin })}>
            <MenuItem {...LOGOUT_MENU_ITEM} />
          </Box>
        </Grid>
      </Grid>
    </ProfileStyled>
  );
};

export default Profile;
