import { Card,CardHeader, Typography } from '@mui/material'

import React from 'react'
import styled from 'styled-components'
import theme from '../../../Theme/theme'

interface OrderInfoCardProps{
    icon:React.ReactNode
    title: string
    subtitle: string
}

const StyledCardHeader = styled(CardHeader)`

    & .MuiTypography-caption2{
        color:${theme.palette.text1.main}
    }
    & .MuiTypography-overline{
        color:${theme.palette.text3.main}
    }

     & .MuiCardHeader-avatar {
        margin-left: 16px;
    }
`
const StyledCard = styled(Card)`
    box-shadow:none;
    width:335px;
    height:60px;
 
`

const OrderInfoCard = (props: OrderInfoCardProps) => {
  return (
    <StyledCard elevation={0}>
        <StyledCardHeader 
            avatar={props.icon}
            title={<Typography variant="caption2" component="div">{props.title}</Typography>}
            subheader={<Typography variant="overline" component="div">{props.subtitle}</Typography>}
        />
    </StyledCard>
  )
}

export default OrderInfoCard
