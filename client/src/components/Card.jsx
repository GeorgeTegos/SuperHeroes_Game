import React from "react";
import styled, { css } from "styled-components";
import marvel from "../images/marvel-logo-34291.png";
import dc from "../images/dc-symbol.png";
import "../../src/App.css";

const CardStyle = styled.div`
  color: White;
  background-color: ${(props) => props.$background && `${props.$background}`};
  border: 7px solid ${(props) => props.$border && `${props.$border}`};
  border-radius: 20px;
  box-shadow: 0px 0px 1px 3px gold;
`;

const Image = styled.div`
  background: ${(props) =>
    props.$background ? `url(${props.$background}) center/cover` : "white"};
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  min-height: 30rem;
  min-width: 22rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const StatsUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const CardHeader = styled.div`
  display: flex;
  padding: 3px;
  font-family: "Times New Roman", Times, serif;
  align-items: center;
  border-bottom: 5px solid ${(props) => props.$border && `${props.$border}`};
`;

const CardStat = styled.li`
  background-color: beige;
  color: black;
  margin-right: 5px;
  min-width: 8rem;
  padding: 5px 10px 5px 10px;
  border: 1px solid black;
  box-shadow: 4px 2px 5px 1px white;
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 0px 20px 20px white;
    cursor: pointer;
    font-weight: bold;
  }
`;

const TotalCardPowerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: beige;
  color: black;
  border-radius: 10px;
  padding: 2px;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
  min-height: 2.5rem;
`;

function Card({ card, handlePickOption }) {
  let totalCardPower = 0;
  Object.entries(card.powerstats).map(([key, value]) => {
    totalCardPower += Number(value);
  });

  // const handlePickOption = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      <CardStyle
        key={card._id}
        $background={card.universe == "Marvel" ? "#AA0000" : "#00308F"}
        $border={card.universe == "Marvel" ? "#00308F" : "#AA0000"}
      >
        <CardHeader $border={card.universe == "Marvel" ? "#00308F" : "#AA0000"}>
          <h2 style={{ marginRight: "auto", paddingLeft: "20px" }}>
            {card.name}
          </h2>
          <img
            src={card.universe == "Marvel" ? marvel : dc}
            className="universe-symbol-card"
            alt=""
          />
        </CardHeader>
        <Image $background={card.image.url}>
          <TotalCardPowerStyle>
            <div>Total Power</div>
            <div>{totalCardPower}</div>
          </TotalCardPowerStyle>
          <StatsUl>
            <CardStat
              key="int"
              onClick={handlePickOption}
              value={card.powerstats.value}
            >
              Intelligence: {card.powerstats.intelligence}
            </CardStat>
            <CardStat
              key="str"
              onClick={handlePickOption}
              value={card.powerstats.strength}
            >
              Strength: {card.powerstats.strength}
            </CardStat>
            <CardStat
              key="speed"
              onClick={handlePickOption}
              value={card.powerstats.speed}
            >
              Speed: {card.powerstats.speed}
            </CardStat>
            <CardStat
              key="durability"
              onClick={handlePickOption}
              value={card.powerstats.durability}
            >
              Durability: {card.powerstats.durability}
            </CardStat>
            <CardStat
              key="power"
              onClick={handlePickOption}
              value={card.powerstats.power}
            >
              Power: {card.powerstats.power}
            </CardStat>
            <CardStat
              key="combat"
              onClick={handlePickOption}
              value={card.powerstats.combat}
            >
              Combat: {card.powerstats.combat}
            </CardStat>
          </StatsUl>
        </Image>
      </CardStyle>
    </>
  );
}

export default Card;
