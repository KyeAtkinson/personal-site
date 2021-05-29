import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lottie from "lottie-web";
import Beer from "../lottie-files/six-pack-beer.json";

const Container = styled.div`
  position: fixed;
  right: 0;
  background: white;
  border-radius: 0 0 0 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  z-index: 100;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};

  a {
    :visited {
      color: black;
    }
  }

  .text {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: 0.3s;
    z-index: 1;
    background: white;
    padding: 6px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 5px 0 0 5px;

    :visited {
      color: black;
    }
  }

  :hover {
    .text {
      opacity: 1;
      transform: translateX(-80px);
    }
  }

  .beer {
    height: 100px;
    width: 100px;
    overflow: hidden;
  }
`;

const CoffeeButton = () => {
  const beerContainer = useRef(null);
  const [useHeight, setHeight] = useState(null);
  const [useOpacity, setOpacity] = useState(true);

  useEffect(() => {
    const beerAnim = lottie.loadAnimation({
      container: beerContainer.current,
      render: "svg",
      loop: false,
      autoplay: false,
      animationData: Beer,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });
    beerAnim.playSegments([46, 55], true);

    beerContainer.current.addEventListener("mouseenter", () => {
      beerAnim.playSegments([46, 164], true);
      beerAnim.setSpeed(0.5);
    });

    beerContainer.current.addEventListener("mouseleave", () => {
      beerAnim.goToAndStop(10, true);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });

    if (useHeight > 600) {
      setOpacity(false);
    } else {
      setOpacity(true);
    }

    console.log(useHeight);
    console.log(useOpacity);
  }, [useHeight, useOpacity]);
  return (
    <Container id="container" isVisible={useOpacity}>
      <Link to="/beer" style={{ textDecoration: "none", color: "black" }}>
        <div className="text">Donate a beer</div>
        <div className="beer" ref={beerContainer}></div>
      </Link>
    </Container>
  );
};

export default CoffeeButton;
