import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import theme from '../../../Theme/theme'

export interface TestCardProps {
    title: string;
    priceDesc: string;
    timeDesc: string;
    noOfTests: string;
    action: string;
    image: string;
}

const StyledCardMedia = styled(CardMedia)`
        width: 144px;
        height: 165px;
        margin-left: 12px;
    
`

const StyledTypo = styled(Typography)<{color?: string, fontWeight?:string, fontSize?:string, lineHeight?: string}>`
    text-transform: none;
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};

`
const StyledCard = styled(Card)`
    width: 382px;
    height: 189px;
    display: flex;
    box-shadow: 0px 0px 12px 0px #E9E8ED87;
    border: 1px solid #F8F8FA;
    align-items: center;
    border-radius: 12px;
`
const StyledCardContent = styled(CardContent)`
    display: flex;
    row-gap: 8px;
    flex-direction: column;
    padding: 0px 16px;
    
`

const ChooseTestCard = (props: TestCardProps) => {
    return (
        <StyledCard data-testid="chooseTestCard">
            <StyledCardMedia image={props.image}  />
            <div>
            <StyledCardContent>
                <StyledTypo color={theme.palette.text1.main} variant="button">{props.title}</StyledTypo>
                <StyledTypo variant="h2" fontSize="16px" lineHeight="20px" color={theme.palette.text2.main}>{props.priceDesc}</StyledTypo>
                <StyledTypo variant="subtitle2" fontSize="12px" lineHeight="18px" color={theme.palette.text3.main}>{props.timeDesc}</StyledTypo>
                <StyledTypo variant="subtitle2" fontSize="12px" lineHeight="18px" color={theme.palette.text3.main}>{props.noOfTests}</StyledTypo>
            </StyledCardContent>
            <CardActions sx={{marginTop:"46px",padding: "0px 8px"}}>
                <Button variant="text" sx={{textDecoration: "underline", color: theme.palette.text3.main, padding: "0px 8px"}}>
                    <StyledTypo variant="button" fontSize={"12px"} >{props.action}</StyledTypo>
                </Button>
            </CardActions>
            </div>
            
        </StyledCard>
    );
};

export default ChooseTestCard;
