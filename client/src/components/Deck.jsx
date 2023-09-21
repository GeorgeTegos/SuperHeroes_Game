import React from "react";
import { useState } from "react";

function Deck({ cardsData, deckToCreate }) {
  {
    const newDeck = [];
    while (newDeck.length < 10) {
      const getRandomNumber = Math.floor(Math.random() * cardsData.length);
      const newCard = cardsData[getRandomNumber];
      if (newDeck.some((card) => card._id === newCard._id)) {
        // Does nothing , same card
      } else {
        newDeck.push(newCard);
      }
    }
    if (deckToCreate == "1") {
      setDeckOne(newDeck);
    } else {
      setDeckTwo(newDeck);
    }
  }
  return <div>Deck</div>;
}

export default Deck;
