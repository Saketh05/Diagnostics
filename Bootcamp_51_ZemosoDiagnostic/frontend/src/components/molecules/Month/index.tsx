import { Button, ButtonProps, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

import theme from '../../../Theme/theme'

interface MonthProps extends ButtonProps{
    checked: boolean
}

const StyledButton = styled(Button)<{checked: boolean}>`
    text-transform: none;
    width: 142px;
    height: 40px;
    border-radius: 12px;
    &:hover{
        background: ${props => props.checked ?  theme.palette.purple[800] : theme.palette.grey[50]};
        color: ${props => props.checked ?  theme.palette.background1.main :theme.palette.text2.main};
    }
    background: ${props => props.checked ?  theme.palette.purple[800] : theme.palette.grey[50]};
    color: ${props => props.checked ?  theme.palette.background1.main :theme.palette.text2.main};
`

const Month = (props:MonthProps) => {
    return(
        <StyledButton
            disableRipple
            checked={props.checked}
        >
            <Typography variant='overline2'>{props.children}</Typography>
        </StyledButton>
    );

}
export default Month
