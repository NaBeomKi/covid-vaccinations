import React, { memo, useState } from "react";
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

  &.active {
    background: skyblue;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Period = memo(({ setStartDate, setStep }) => {
  const [clicked, setClicked] = useState(["true", false, false, false]);

  const handleClick = (index) => (e) => {
    if (clicked[index]) {
      return;
    }
    const days = parseInt(e.target.dataset.days);
    const millisecond = days && days * 24 * 60 * 60 * 1000;
    const startDate = days && new Date(Date.now() - millisecond);
    setStartDate(startDate);
    setClicked(
      Array(clicked.length)
        .fill()
        .map((v, i) => (i === index ? true : false))
    );

    if (days === 0 || days > 30) {
      setStep(30);
    } else if (days <= 7) {
      setStep(1);
    } else if (days <= 30) {
      setStep(7);
    }
  };

  return (
    <div>
      {PERIOD_LIST.map((period, i) => (
        <Button
          key={period.name}
          data-days={period.days}
          className={clicked[i] ? "active" : null}
          onClick={handleClick(i)}
        >
          {period.name}
        </Button>
      ))}
    </div>
  );
});

export default Period;
