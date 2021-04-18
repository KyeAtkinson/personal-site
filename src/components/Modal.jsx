import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { db } from ".././firebase";

const FadeiN = keyframes`
  from {
    transform: translate(100%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ModalContainer = styled.div`
  background: #17171791;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s ease-in-out;
  opacity: 1;

  .Modal {
    animation: ${FadeiN} 0.5s linear;
    border-radius: 20px;
    background: white;
    width: 40vw;
    position: fixed;
    height: 80%;
    max-height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    @media screen and (max-width: 1100px) {
      width: 90vw;
    }
  }

  h1 {
    margin: 0;
    text-align: center;
    margin: 2rem;
  }

  .close {
    border: none;
    background: none;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 1.4rem;
  }

  .close:focus {
    outline: none;
  }

  .close:hover {
    transform: scale(1.1);
  }

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .form > input,
    textarea {
      padding: 20px;
      border-radius: 3px;
      /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
      margin-bottom: 20px;
      border: 1px solid lightgray;
      /* border: none; */
      background: #fff;
      font-size: 16px;
      color: rgb(0, 0, 32);
      outline: none;
      width: 100%;
    }

    .form > input:focus,
    textarea:focus {
      border: 1px solid rgb(0, 0, 196);
    }

    .form > textarea {
      height: 150px;
      width: 100%;
      max-width: 300px;
      max-height: 100px;
      min-height: 50px;
    }

    .form > label {
      padding-bottom: 10px;
      color: rgb(0, 0, 32);
      font-weight: bold;
    }

    .form > button {
      height: 2rem;
      border-radius: 3px;
      border: none;
      color: white;
      font-weight: 900;
      padding: 0 2rem;
      background: #60988f;
    }

    .form > button:hover {
      background-color: orange;
    }
  }
`;

const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("your submission was succesful");
        setLoader(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <ModalContainer>
      <div className="Modal">
        <div>
          <button className="close" onClick={closeModal}>
            X
          </button>
        </div>
        <h1>Contact Me!</h1>
        {loader ? null : (
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
