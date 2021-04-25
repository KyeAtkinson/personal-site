import React from "react";
import styled from "styled-components";
import underivy from "../../images/undertheivy.png";
import imagetwo from "../../images/spire.png";
import larooma from "../../images/larooma.png";
import dog from "../../images/cutsformuts.png";

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 2rem;

  .box {
    background-size: 100% 100%;
    margin: 1rem;
    height: 14rem;
    width: 23rem;
  }

  .one {
    background-image: url(${imagetwo});
  }

  .two {
    background-image: url(${larooma});
  }

  .three {
    background-image: url(${underivy});
  }

  .four {
    background-image: url(${dog});
  }
`;

const PortfolioContainer = () => {
  return (
    <Container>
      <div>
        <div className="box one"></div>
      </div>
      <div>
        <div className="box two"></div>
      </div>
      <div>
        <div className="box three"></div>
      </div>
      <div>
        <div className="box four"></div>
      </div>
    </Container>
  );
};

export default PortfolioContainer;
