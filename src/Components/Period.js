import React, { useState } from "react";
import styled from "styled-components";
import { PERIOD_LIST } from "../constants";

const Button = styled.button`
  all: unset;
  margin-right: 0.625rem;
  padding: 0.625rem;
  background: #636e72;
  color: #fff;
  border-radius: 0.625rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Period = ({ setStartDate, setStep }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    const days = e.target.dataset.days;
    const millisecond = days && days * 24 * 60 * 60 * 1000;
    const startDate = days && new Date(Date.now() - millisecond);
    setStartDate(startDate);
    setClicked(true);
    if (days <= 7) {
      setStep(1);
    } else if (days <= 30) {
      setStep(7);
    } else {
      setStep(30);
    }
  };

  return (
    <div>
      {PERIOD_LIST.map((period) => (
        <Button
          key={period.name}
          data-days={period.days}
          className={clicked ? "active" : null}
          onClick={handleClick}
        >
          {period.name}
        </Button>
      ))}
    </div>
  );
};

export default Period;
