import React from "react";
import styled from "styled-components";

const ArticleElement = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 0.625rem;
  color: #999;
`;

const TotalCnt = styled.span`
  margin-bottom: 0.625rem;
  color: ${(props) => props.color};
  font-size: 2rem;
`;

const TodayCnt = styled.span`
  padding: 0.425rem 2rem;
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 5rem;
  font-size: 1rem;
`;

const Article = ({ title, cnt, totalCnt, color }) => {
  return (
    <ArticleElement>
      <Title>{title}</Title>
      <TotalCnt color={color}>{totalCnt}</TotalCnt>
      <TodayCnt color={color}>{cnt} ⬆️</TodayCnt>
    </ArticleElement>
  );
};

export default Article;
