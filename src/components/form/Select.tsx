import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";

interface StyleProps {
  padding?: string;
  border?: string;
  borderRadius?: string;
}

interface Props extends StyleProps {
  selectValue: any;
  onChange: any;
  options: any;
  name?: string;
  label?: string;
  isLabelRequired?: boolean;
}

export default function Select({
  selectValue,
  onChange,
  options,
  padding = "5px 10px",
  border = `1px solid ${Colors.LIGHT_GRAY}`,
  borderRadius = "10px",
  name = "",
  label = "",
  isLabelRequired = true,
}: Props) {
  return (
    <SelectContainer>
      {isLabelRequired && <Label htmlFor={name}>{label}</Label>}
      <SelectWrapper
        padding={padding}
        border={border}
        borderRadius={borderRadius}
        value={selectValue}
        onChange={onChange}
      >
        {options}
      </SelectWrapper>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${Colors.GRAY};
  margin-bottom: 1px;
`;

const SelectWrapper = styled.select<StyleProps>`
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
`;
