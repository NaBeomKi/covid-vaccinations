import React from "react";
import styled from "styled-components";

const SectionElement = styled.div`
  margin: 1.25rem 0;
  padding: 0.625rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.625rem;
`;

const Section = ({ children }) => {
  return <SectionElement>{children}</SectionElement>;
};

export default Section;
