import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CompanyLogo from "../../molecules/CompanyLogo";

interface TestFormProps {
   children: React.ReactNode;
}

const StyledGrid = styled(Grid)`
  & .header{
        margin-left: 90px;
        margin-top: 24px;
    }
  & .content{
        margin-top: 33px;
  }
`

const TestForms: React.FC<TestFormProps> = ({children}) =>{
    return(
        <StyledGrid container direction={"column"}>
            <Grid item className="header">
                <CompanyLogo />
            </Grid>
            <Grid item className="content">
                {children}
            </Grid>
        </StyledGrid>
    );
}

export default TestForms;
  