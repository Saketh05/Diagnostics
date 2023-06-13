import { Chip, styled } from "@mui/material";
import React from "react";

export interface TagProps {
  backgroundcolor?: string;
  color: string;
  label: string;
  handleOnClickSelection: (label: string) => void;
}

const StyledTag = styled(Chip)<{ backgroundcolor?: string, textcolor: string }>`
  background-color: ${(props) => props.backgroundcolor};
  border-radius: 16px;
  height: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.textcolor};
  &:hover {
    background-color: ${(props) => props.backgroundcolor};
  }
`;

const Tag: React.FC<TagProps> = ({
  backgroundcolor,
  color,
  label,
  handleOnClickSelection,
}) => {
  return (
    <StyledTag
      data-testid="tag"
      backgroundcolor={backgroundcolor}
      textcolor={color}
      label={label}
      onClick={() => {
        handleOnClickSelection(label);
      }}
    />
  );
};

export default Tag;
