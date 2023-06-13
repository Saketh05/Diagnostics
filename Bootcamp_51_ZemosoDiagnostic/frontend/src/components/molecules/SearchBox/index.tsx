import { InputAdornment, styled, TextField } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import { Icon } from "../../atoms/Icon";

const StyledSearchBox = styled(TextField)`
  width: 100%;
& .MuiOutlinedInput-root {
      border: 1px solid ${theme.palette.grey1[100]};
      height:40px;
      padding: 8px 16px;
      border-radius: 8px;
      & fieldset {
        border-color: ${theme.palette.grey1[100]};
      }
      &:hover fieldset {
        border-color: ${theme.palette.grey1[100]};
      }
      &.Mui-focused fieldset{
        border-color: ${theme.palette.grey1[100]};
      } 
      & .MuiOutlinedInput-input {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${theme.palette.text3.main};
    }
}

`;

const SearchBox = () =>{
    return (
      <StyledSearchBox  data-testid="search-box" InputProps={{
        startAdornment: <InputAdornment position="start"><Icon name="search"/></InputAdornment>,
      }}
      placeholder="Search for lab test, packages">      
      </StyledSearchBox>
    )
}

export default SearchBox;