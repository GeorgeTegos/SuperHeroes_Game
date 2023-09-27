import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";
import Card from "../components/Card";
// import BattleGroundWrapper from "../styles/PlayStyle";

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

  const handlePickOption = (e) => {
    console.log(e.target.value);

    // handleComparison(playerOneCard, playerTwoCard);
  };

  const handleComparison = (playerOneSelectedCard, playerTwoSelectedCard) => {
    if (playerOneCard > playerTwoCard) {
      console.log("player 1");
    } else if (playerOneCard < playerTwoCard) {
      console.log("player 2");
    } else {
      console.log("tie");
    }
  };

  return (
    <>
      <BattleGroundWrapper>
        <BattleGroundHeader>
          <PlayerOneInfo>
            <div>Player One</div> <div>Cards: 10</div> <div>Your Round</div>
          </PlayerOneInfo>
          <Rounds>
            {gameStarted == true ? (
              <span>Round X</span>
            ) : (
              <button onClick={startGame}>Start</button>
            )}
          </Rounds>
          <PlayerTwoInfo>
            <div>Player Two</div>
            <div>Cards: 10</div> <div>Player Two</div>
          </PlayerTwoInfo>
        </BattleGroundHeader>
        <BattleGround>
          <PlayerOne>
            {playerOneCard && (
              <Card
                key={playerOneCard._id}
                card={playerOneCard}
                handlePickOption={handlePickOption}
              />
            )}
          </PlayerOne>
          {gameStarted == true && (
            <div>
              <button onClick={handleCardPerRound}>New Round</button>
            </div>
          )}
          <PlayerTwo>
            {playerTwoCard && (
              <Card
                key={playerTwoCard._id}
                card={playerTwoCard}
                handlePickOption={handlePickOption}
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
