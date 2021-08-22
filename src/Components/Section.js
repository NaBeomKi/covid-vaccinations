import React, { memo } from "react";
import styled from "styled-components";

const SectionElement = styled.section`
  margin: 1.25rem 0;
  padding: 2rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.625rem;
`;

const Section = memo(({ children }) => {
  return <SectionElement>{children}</SectionElement>;
});

export default Section;
