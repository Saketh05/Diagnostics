import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/system";
import theme from "../../../Theme/theme"
import Logo from '../../atoms/Logo';

const StyledTypo = styled(Typography)`
    margin-bottom: 11px;
`
const StyledDivider = styled(Divider)`
    background-color: ${theme.palette.grey1[100]};
`

const StyledCardHeader = styled(CardHeader)`
    display: flex;
    padding: 30px;
    padding-bottom: 12px;
    & .MuiCardHeader-avatar{
        flex:9;
    }
    & .title{
        color: rgba(18, 18, 29, 0.3);
    }
`

const StyledCardContent = styled(CardContent)`
   margin-left: 30px;
   margin-top: 25px;
`
const StyledGrid = styled(Grid)`
    margin-top:11px;
    & .MuiGrid-item{
        padding:0px;
    }
    & .gridlevel1{
        color: ${theme.palette.text3.main}
    }
    & .gridlevel2{
        color: ${theme.palette.text2.main}
    }
`
const StyledCard = styled(Card)`
    width:433px;
    height:200px;
    border-radius:16px;
    box-shadow: 0px 0px 12px 0px #e9e8edb2;

    & .MuiCardContent-root {
        padding: 0px;
    }
`

export interface CreditCardProps{
    cardNum: string;
    cardHolder: string;
    expiryDate: string;
  }

const CreditCard: React.FC<CreditCardProps> = (props) => {

  return (
    <>
    {props.cardNum === ""  ? (<StyledDivider />):(
   <StyledCard >
       <StyledCardHeader 
        avatar={
            <Logo name="creditCard" />
        }
        title={<Typography className="title" variant="faq">
            Sample
        </Typography>}
        />
        <StyledCardContent>
            <StyledTypo variant='button'>{props.cardNum}</StyledTypo>
            <StyledGrid container wrap="wrap" rowSpacing={1} >
                <Grid item container wrap="nowrap" columnGap={4}>
                    <Grid className='gridlevel1' item xs={4}><Typography variant="overlineR">Card Holder</Typography></Grid>
                    <Grid className='gridlevel1' item xs={4}><Typography variant="overlineR">Expires</Typography></Grid>
                </Grid>
                <Grid item container columnGap={4}>
                    <Grid className="gridlevel2" item xs={4}><Typography variant='overline2'>{props.cardHolder}</Typography></Grid>
                    <Grid className="gridlevel2" item xs={4}><Typography variant='overline2'>{props.expiryDate}</Typography></Grid>
                </Grid>    
            </StyledGrid>
        </StyledCardContent>
    </StyledCard>
  )}
    </>
  )
}

export default CreditCard
