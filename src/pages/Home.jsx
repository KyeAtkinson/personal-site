import React, { useEffect, useState } from "react";
import UncontrolledLottie from "../components/UncontrolledLottie";
import styled from "styled-components";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import CoffeeButton from "../components/CoffeeButton";

const AppContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  background: linear-gradient(45deg, #14d89e 45%, #107ab5);
  opacity: ${(props) => (props.ready ? "1" : "1")};
  transition: 1s ease-in-out;
`;
const Container = styled.div`
  height: 60vh;
  margin: 0 20%;
  padding-top: 4rem;

  @media screen and (max-width: 600px) {
    margin: 0 10%;
  }

  .title-header {
    margin-top: 8rem;

    @media screen and (max-width: 600px) {
      margin-top: 3rem;
    }
    h2 {
      font-family: "Montserrat";
      color: transparent;
      -webkit-text-stroke: 2px white;
      font-style: normal;
      font-weight: 800;
      font-size: 45px;
      letter-spacing: 1px;
      margin-bottom: 10px;
      margin-top: 0;

      @media screen and (min-width: 1600px) {
        font-size: 90px;
      }
    }

    h3 {
      font-size: 20px;
      text-transform: uppercase;
      margin-top: 10px;
      font-weight: 900;

      @media screen and (min-width: 1600px) {
        font-size: 30px;
      }
    }

    p {
      max-width: 30rem;
      color: white;
    }
  }

  .lottie {
    z-index: 3;
    position: absolute;
    right: 35%;
    top: 45%;
    transform: translate(50%, -10%);

    @media screen and (max-width: 1200px) {
      transform: scale(0.9);
      right: 20%;
    }

    @media screen and (max-width: 650px) {
      transform: scale(0.8);
      right: 0;
    }

    @media screen and (max-width: 450px) {
      transform: scale(0.7);
      right: 0;
    }
    @media screen and (max-width: 380px) {
      transform: scale(0.6);
      left: 0;
    }
    @media screen and (max-width: 340px) {
      transform: scale(0.5);
      left: 0;
    }
  }
`;

const Segment = styled.div`
  .svg-container {
    padding-top: 30px;
    .triangle {
      display: block;
      transform: translateY(1px);
    }
  }
  .content-holder {
    background: #404040;
    width: 100%;
  }
`;

function Home() {
  const [isReady, setDoc] = useState(false);

  function myFunc() {
    setTimeout(function () {
      setDoc(() => true);
    }, 100);
  }

  useEffect(() => {
    window.addEventListener("load", myFunc());
  }, []);
  return (
    <AppContainer ready={isReady}>
      <CoffeeButton />
      <Container>
        <div className="title-header">
          <h2>KYE ATKINSON</h2>
          <h3>Software Engineer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            dolore doloremque, animi repellat voluptatum veniam!
          </p>
        </div>
        <div className="lottie">
          <UncontrolledLottie height={400} width={400} />
        </div>
      </Container>
      <Segment>
        <div className="svg-container">
          <svg
            className="triangle"
            width="100%"
            height="auto"
            viewBox="0 0 1440 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 185.678L718 0.5L1440 185.678H718H0Z" fill="#404040" />
          </svg>
        </div>
        <div className="content-holder">
          <About />
        </div>
        <Portfolio />
        <Contact />
      </Segment>
    </AppContainer>
  );
}

export default Home;
