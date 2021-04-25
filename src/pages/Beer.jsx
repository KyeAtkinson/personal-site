import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #14d89e 45%, #107ab5);

  h1 {
    text-align: center;
    color: white;
    margin-top: 0;
  }
  .contained-bottles {
    display: flex;
    flex-wrap: wrap;
  }

  .bottle {
    background: white;
    height: 10rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
`;

// const Donations = [
//   { name: "Karen", donationAmount: "£5.00", message: "Nice work on the site!" },
//   { name: "Dave", donationAmount: "£5.00", message: "Beer Bottle" },
// ];

const Beer = () => {
  const [bottleDonations, setDonations] = useState([]);
  const ref = db.collection("donations");

  function addDonation(newBeer) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newBeer.id)
      .set(newBeer)
      .then(() => {
        setDonations((prev) => [newBeer, ...prev]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getDonations() {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setDonations(items);
    });
  }
  useEffect(() => {
    getDonations();
  });

  return (
    <Container>
      <h1>Beer Wall</h1>
      <div className="contained-bottles">
        {bottleDonations.map((donate) => (
          <div className="bottle" id={donate.id}>
            <p>{donate.name}</p>
            <p>{`${donate.value}`}</p>
            <p>{donate.message}</p>
          </div>
        ))}
        <button
          onClick={() =>
            addDonation({
              ID: uuidv4(),
              name: "kye",
              value: 300.4,
              message: "Heres a beer mate",
            })
          }
        >
          Click Me
        </button>
      </div>
    </Container>
  );
};

export default Beer;
