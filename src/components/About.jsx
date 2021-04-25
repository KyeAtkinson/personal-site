import React, { useEffect } from "react";
import styled from "styled-components";
import Me from "../images/me.jpg";
import { ReactComponent as ReactLogo } from "../images/react.svg";
import { ReactComponent as JSLogo } from "../images/javascript.svg";
import { ReactComponent as VueLogo } from "../images/vue.svg";
import { ReactComponent as StyledCompLogo } from "../images/styled-components.svg";
import { ReactComponent as LottieLogo } from "../images/lottie.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";

const Container = styled.div`
  padding-top: 10rem;

  .links {
    position: absolute;
    left: 50%;
    list-style: none;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -200%);

    li {
      margin: 0 0.5rem;
      transform: scale(1.2);
      cursor: pointer;

      :hover {
        transform: scale(1.4);
      }

      svg {
        fill: white;
      }
    }
  }

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
        margin: 0 5rem;

        @media screen and (max-width: 1000px) {
          height: 15rem;
          width: auto;
          margin: 1rem 0;
        }

        @media screen and (max-width: 600px) {
          height: 10rem;
          width: auto;
          margin: 0;
        }
      }
    }

    .about-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        color: white;
        margin: 0;
        font-size: 35px;
        font-weight: 900;
      }

      .blurb {
        display: flex;
        justify-content: center;
        p {
          color: white;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      margin: 0;
      h2 {
        text-align: center;
      }

      .blurb {
        p {
          padding: 5px;
          max-width: 20rem;
          line-height: 24px;
        }
      }
    }

    .tech-h2 {
      padding-top: 1.2rem;
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
  const imageRef = React.createRef();
  useEffect(() => {
    // Update the document title using the browser API
    window.addEventListener("scroll", () => {});
  });
  return (
    <Container>
      <ul className="links">
        <li>
          <a href="https://www.linkedin.com/in/kye-atkinson/">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kyeatki/">
            <InstagramLogo />
          </a>
        </li>
      </ul>
      <div className="inner">
        <div ref={imageRef} className="img-container">
          <img className="image" alt="me" src={Me}></img>
        </div>
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <div className="blurb">
            <p>
              Hi It’s Kye. <br /> I am a Software Engineer / Web Developer based
              in Newcastle-Upon-Tyne. <br /> I love travelling, writing code,
              eating food and drinking cocktails!
            </p>
          </div>
          <h2 className="tech-h2">TECH I USE</h2>
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
