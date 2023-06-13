import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import Logo from "../../atoms/Logo";

const StyledGrid = styled(Grid)`
    display: flex;
    align-items: center;
`
const StyledTypography = styled(Typography)`
    margin-top: -4px;
    padding-left: 4px;
    color: ${theme.palette.blue[500]};
`

const CompanyLogo = () =>{
    return (
        <StyledGrid data-testid="logo">
            <Logo name="zemosologo"/>
            <StyledTypography variant="caption1">Zemoso Diagnostics</StyledTypography>
        </StyledGrid>
    )
}
export default CompanyLogo; 
