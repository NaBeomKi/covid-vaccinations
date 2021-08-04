import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Section from "./Section";

const Container = styled.div`
  display: flex;

  & > article {
    width: 50%;
  }
`;

const TodayStatistics = ({ loading, today }) => {
  return (
    <Section>
      <Container>
        {loading ? (
          <p>📡 Loading</p>
        ) : (
          <>
            <Article
              title="1차 접종"
              cnt={today.firstCnt}
              totalCnt={today.totalFirstCnt}
              color="#00b894"
            />
            <Article
              title="2차 접종"
              cnt={today.secondCnt}
              totalCnt={today.totalSecondCnt}
              color="#0984e3"
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default TodayStatistics;
