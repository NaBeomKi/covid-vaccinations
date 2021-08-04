import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin: 1.25rem 0;
  text-align: center;
`;

const SelectElement = styled.select`
  border-radius: 3px;
  border-color: #ccc;
`;

const Select = ({ list }) => {
  return (
    <SelectContainer>
      <SelectElement>
        {list.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </SelectElement>
    </SelectContainer>
  );
};

export default Select;
