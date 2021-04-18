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

  .container {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 80px;
    width: 80px;
    background: white;
    border-radius: 50px;
    margin: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const Contact = () => {
  const container = useRef(null);
  const [showModal, handleModal] = useState(false);
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
  }, []);
  return (
    <Container>
      {showModal ? <Modal closeModal={() => handleModal(false)} /> : null}
      <div className="container" ref={container}></div>
    </Container>
  );
};

export default Contact;
