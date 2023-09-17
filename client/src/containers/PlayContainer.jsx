import React, { useState } from "react";
import { useOutletContext } from "react-router";

function PlayContainer() {
  const { cardsData } = useOutletContext();
  const [deckOne, setDeckOne] = useState([]);
  const [deckTwo, setDeckTwo] = useState([]);

  const handleCardsSplitIntoDeck = (deckToCreate) => {
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
  };
  console.log("Deck One: ", deckOne);
  console.log("Deck Two: ", deckTwo);

  return (
    <div>
      {deckOne.length == 0 && (
        <button
          onClick={(e) => {
            handleCardsSplitIntoDeck(e.target.value);
          }}
          value="1"
        >
          Create Deck One
        </button>
      )}

      {deckTwo.length == 0 && (
        <button
          onClick={(e) => {
            handleCardsSplitIntoDeck(e.target.value);
          }}
          value="2"
        >
          Create Deck Two
        </button>
      )}
    </div>
  );
}

export default PlayContainer;
