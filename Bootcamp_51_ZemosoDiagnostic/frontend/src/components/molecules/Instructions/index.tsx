import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";
import theme from "../../../Theme/theme";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import styled from "styled-components";

export interface TestimonalCardProps extends IconButtonProps {
  header?: string;
  content?: string;
  expand?: boolean;
}

const CardStyled = styled(Card)`
    width: 434px;
    color: ${theme.palette.grey1[100]};
`;

const CardHeaderStyled = styled(CardHeader)`
  & .MuiCardHeader-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  & .MuiCardHeader-avatar {
    margin-left: 9.33px;
    margin-top: 10.33px;
  }
  & .MuiCardContent-root {
    padding:0px;
}
  background-color: ${theme.palette.grey[100]};
  color: ${theme.palette.blue[800]};
  padding: 0px;
`;

const CardContentStyled = styled(CardContent)`
  padding: 8px;
  background-color: ${theme.palette.grey[100]};
  & .MuiTypography-root {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

const ExpandMore = styled((props: TestimonalCardProps) => {
  const {...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

const Instructions: React.FC<TestimonalCardProps> = ({ header, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CardStyled data-testid="instruction-card">
      <CardHeaderStyled
        title={header}
        className="instructions"
        avatar={<Icon name="info" />}
        action={
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Icon name="arrowDown" />
            </ExpandMore>
          </CardActions>
        }
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContentStyled>
          <Typography
            variant="body2"
            color="text.secondary"
            data-testid="content"
          >
            {content}
          </Typography>
        </CardContentStyled>
      </Collapse>
    </CardStyled>
  );
};

export default Instructions;
