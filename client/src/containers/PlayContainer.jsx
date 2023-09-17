import React, { useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";

const BattleGroundWrapper = styled.div`
  margin-top: 1.5rem;
  background-color: grey;
  min-height: 80vh;
`;

const BattleGroundHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.7rem 1rem 0.7rem;
  border: 1px solid red;
`;

const PlayerOne = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  font-weight: bold;
`;

const Rounds = styled.div`
  font-weight: bolder;
`;

const PlayerTwo = styled.div`
  display: flex;
  font-weight: bold;

  width: 30%;
  justify-content: space-around;
`;

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

  return (
    <>
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
      <BattleGroundWrapper>
        <BattleGroundHeader>
          <PlayerOne>
            <div>Player One</div> <div>Cards: 10</div> <div>Your Round</div>
          </PlayerOne>
          <Rounds>Round X</Rounds>
          <PlayerTwo>
            <div>Enemy's Round</div>
            <div>Cards: 10</div> <div>Player Two</div>
          </PlayerTwo>
        </BattleGroundHeader>
      </BattleGroundWrapper>
    </>
  );
}

export default PlayContainer;
