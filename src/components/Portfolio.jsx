import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #404040;
  min-height: 10rem;

  h1 {
    color: white;
    margin: 0;
    text-align: center;
    padding: 1rem 0;
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const Portfolio = () => {
  return (
    <Container>
      <h1>Portfolio</h1>
      <div></div>
    </Container>
  );
};

export default Portfolio;
