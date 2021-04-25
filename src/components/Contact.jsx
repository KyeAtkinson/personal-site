import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import lottie from "lottie-web";
import Message from "../lottie-files/message.json";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;

  .container {
    position: fixed;
    right: 0;
    bottom: ${(props) => (props.shift ? 0 : "100%")};
    height: 80px;
    width: 80px;
    background: white;
    border-radius: 50px;
    margin: 1rem;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    pointer-events: fill;
    overflow: hidden;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const Contact = () => {
  const container = useRef(null);
  const [showModal, handleModal] = useState(false);
  const [shiftContainer, handleShift] = useState(true);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: false,
      animationData: Message,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    container.current.addEventListener("click", () => {
      anim.setSpeed(3);
      anim.play();
    });

    anim.addEventListener("loopComplete", () => {
      anim.stop();
      handleModal(true);
    });

    window.onscroll = () => {
      if (window.scrollY < 200) {
        handleShift(true);
      } else {
        handleShift(false);
      }
    };
  }, [shiftContainer]);

  return (
    <Container shift={shiftContainer}>
      {showModal ? <Modal closeModal={() => handleModal(false)} /> : null}
      <div className="container" ref={container}></div>
    </Container>
  );
};

export default Contact;
