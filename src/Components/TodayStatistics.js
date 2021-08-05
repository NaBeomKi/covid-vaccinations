import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Section from "./Section";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TodayStatistics = ({ loading, today }) => {
  const formatNumber = (number) =>
    new Intl.NumberFormat({ useGrouping: true }).format(number);

  return (
    <Section>
      <Container>
        {loading ? (
          <p>📡 Loading</p>
        ) : (
          <>
            <Article
              title="1차 접종"
              cnt={formatNumber(today.firstCnt)}
              totalCnt={formatNumber(today.totalFirstCnt)}
              color="#00b894"
            />
            <Article
              title="2차 접종"
              cnt={formatNumber(today.secondCnt)}
              totalCnt={formatNumber(today.totalSecondCnt)}
              color="#0984e3"
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default TodayStatistics;
