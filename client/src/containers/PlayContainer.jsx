import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";

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

const PlayerOneInfo = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  font-weight: bold;
`;

const Rounds = styled.div`
  font-weight: bolder;
`;

const PlayerTwoInfo = styled.div`
  display: flex;
  font-weight: bold;

  width: 30%;
  justify-content: space-around;
`;

function PlayContainer() {
  const { cardsData } = useOutletContext();
  const [deckOne, setDeckOne] = useState([]);
  const [deckTwo, setDeckTwo] = useState([]);
  const [playerOneCard, setPlayerOneCard] = useState();
  const [playerTwoCard, setPlayerTwoCard] = useState();
  const [gameStarted, setGameStarted] = useState(false);

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

  const handleCardPerRound = () => {
    const giveACard = (deck) => {
      const getRandomNumber = Math.floor(Math.random() * deck.length);
      const selectedCard = deck[getRandomNumber];
      return selectedCard;
    };
    setPlayerOneCard(giveACard(deckOne));
    setPlayerTwoCard(giveACard(deckTwo));
  };

  const startGame = () => {
    handleCardsSplitIntoDeck("1");
    handleCardsSplitIntoDeck("2");
    setGameStarted(true);
  };

  return (
    <>
      <BattleGroundWrapper>
        <BattleGroundHeader>
          <PlayerOneInfo>
            <div>Player One</div> <div>Cards: 10</div> <div>Your Round</div>
            <div>
              {/* {deckOne.length == 0 && (
                <button
                  onClick={(e) => {
                    handleCardsSplitIntoDeck(e.target.value);
                  }}
                  value="1"
                >
                  Create Deck One
                </button>
              )} */}
            </div>
          </PlayerOneInfo>
          <Rounds>
            {gameStarted == true ? (
              <span>Round X</span>
            ) : (
              <button onClick={startGame}>Start</button>
            )}
          </Rounds>
          <PlayerTwoInfo>
            <div>
              {/* {deckTwo.length == 0 && (
                <button
                  onClick={(e) => {
                    handleCardsSplitIntoDeck(e.target.value);
                  }}
                  value="2"
                >
                  Create Deck Two
                </button>
              )} */}
            </div>
            <div>Enemy's Round</div>
            <div>Cards: 10</div> <div>Player Two</div>
          </PlayerTwoInfo>
        </BattleGroundHeader>
        <BattleGround>
          <PlayerOne>
            {/* {deckOne.length > 0 && handleCardSelect()} */}
            {playerOneCard && (
              <Card
                key={playerOneCard._id}
                card={playerOneCard}
              />
            )}
          </PlayerOne>
          <div>
            <button onClick={handleCardPerRound}>New Round</button>
          </div>
          <PlayerTwo>
            {playerTwoCard && (
              <Card
                key={playerTwoCard._id}
                card={playerTwoCard}
              />
            )}
          </PlayerTwo>
        </BattleGround>
      </BattleGroundWrapper>
    </>
  );
}

export default PlayContainer;

const BattleGround = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid yellow;
  justify-content: space-between;
`;

const PlayerOne = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  padding: 5px;
`;

const PlayerTwo = styled.div`
  padding: 5px;
`;
