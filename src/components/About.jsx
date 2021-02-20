import React from "react";
import styled from "styled-components";
import Me from "../images/me.jpg";
import { ReactComponent as ReactLogo } from "../images/react.svg";
import { ReactComponent as JSLogo } from "../images/javascript.svg";
import { ReactComponent as VueLogo } from "../images/vue.svg";
import { ReactComponent as StyledCompLogo } from "../images/styled-components.svg";
import { ReactComponent as LottieLogo } from "../images/lottie.svg";

const Container = styled.div`
  padding-top: 10rem;

  .inner {
    background: #232323;
    display: flex;
    padding: 7rem 10rem;
    justify-content: center;
    box-shadow: 0px -7px 18px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      padding: 3rem 0;
      .image {
        margin: 10px 0 10px 0;
      }
    }
    .img-container {
      display: flex;
      justify-content: center;

      .image {
        border-radius: 50%;
        height: 20rem;
        border: solid 5px #42da9b;

        @media screen and (max-width: 1000px) {
          height: 15rem;
          width: auto;
        }

        @media screen and (max-width: 600px) {
          height: 10rem;
          width: auto;
        }
      }
    }

    .about-text {
      margin-left: 5rem;

      @media screen and (max-width: 1000px) {
        margin: 0;
        h2 {
          text-align: center;
        }

        p {
          margin: 1.5rem auto;
          padding: 5px;
          max-width: 20rem;
          line-height: 24px;
        }
      }

      h2 {
        color: white;
        margin: 0;
        font-size: 35px;
        font-weight: 900;
      }
      p {
        color: white;
        max-width: 30rem;
        margin-left: 10px;
      }
    }

    .tech-segment {
      display: flex;
      align-items: center;

      @media screen and (max-width: 1000px) {
        justify-content: center;

        ul {
          li {
            margin: 5px;
          }
        }
      }

      @media screen and (max-width: 400px) {
        ul {
          margin: 10px;
          li {
            svg {
              width: 60px;
            }
          }
        }
      }

      ul {
        list-style: none;
        display: flex;
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;

        li {
          width: 90px;
          display: flex;
          justify-content: center;
          svg {
            height: 80px;
            width: 80px;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <Container>
      <div className="inner">
        <div className="img-container">
          <img className="image" alt="me" src={Me}></img>
        </div>
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <p>
            Hi It’s Kye. <br /> I am a Software Engineer / Web Developer based
            in Newcastle-Upon-Tyne. <br /> I love travelling, writing code,
            eating food and drinking cocktails!
          </p>
          <h2>TECH I USE</h2>
          <div className="tech-segment">
            <ul>
              <li>
                <ReactLogo />
              </li>
              <li>
                <VueLogo />
              </li>
              <li>
                <JSLogo />
              </li>
              <li>
                <StyledCompLogo />
              </li>
              <li>
                <LottieLogo />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
