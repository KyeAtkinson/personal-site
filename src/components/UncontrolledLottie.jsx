// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie-files/developer.json";

class UncontrolledLottie extends Component {
  render() {
    const props = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        height={props.height}
        width={props.width}
      />
    );
  }
}

export default UncontrolledLottie;
