import React, { memo } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin: 1.25rem 0;
  text-align: center;
`;

const SelectElement = styled.select`
  border-radius: 3px;
  border-color: #ccc;
  font-size: 1.125rem;
`;

const Select = memo(({ sidoList, setLocation }) => {
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <SelectContainer>
      <SelectElement onChange={handleChange}>
        {sidoList.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </SelectElement>
    </SelectContainer>
  );
});

export default Select;
