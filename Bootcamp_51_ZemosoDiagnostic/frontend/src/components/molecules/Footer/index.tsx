import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Icon } from '../../atoms/Icon'
import Illustration from '../../atoms/Illustration'
import CompanyLogo from '../CompanyLogo'
import GooglePlay from "../../../../public/assets/images/GooglePlay.png"
import AppStore from "../../../../public/assets/images/AppStore.png"
import { styled } from '@mui/system'
import theme from '../../../Theme/theme'

interface FooterProps{
    text1: string
    text2: string
    text3: string
    text4: string
} 

const StyledGrid = styled(Grid)`
    padding: 60px 90px;
    background: ${theme.palette.blue[800]};

    & .typo{
      color: ${theme.palette.blue[100]};
    }

    & .gridItem1{
        display: flex;
        flex: 1;
        flex-direction: column;
        row-gap: 8px;
    }
    & .companyLogo{
      margin-bottom: 16px;
      > div span{
        color: ${theme.palette.background1.main};
      }
    }
    & .gridItem2{
      > div{
        margin-bottom: 20px
      }
    }
    & .iconBox{
      display: flex;
      justify-content: flex-end;
      column-gap: 18px;
    }
`

const Footer = (props: FooterProps) => {
  return (
    <StyledGrid container>
        <Grid item className='gridItem1'>
            <Box className='companyLogo'>
              <CompanyLogo />
            </Box>
            <Typography variant='caption3' className='typo' component="div">{props.text1}</Typography>
            <Typography variant='caption3' className='typo' component="div">{props.text2}</Typography>
            <Typography variant='caption3' className='typo' component="div">{props.text3}</Typography>
            <Typography variant='caption3' className='typo' component="div">{props.text4}</Typography>
        </Grid>
        <Grid item className='gridItem2'>
            <Illustration image= {GooglePlay}/>
            <Illustration image={AppStore}/>
            <Box className='iconBox'>
              <Icon name="faceBook"/>
              <Icon name='twitter'/>
            </Box>
        </Grid>
    </StyledGrid>
  )
}

export default Footer
