import React from "react";
import styled, { css } from "styled-components";
import marvel from "../images/marvel-logo-34291.png";
import dc from "../images/dc-symbol.png";
import "../../src/App.css";

const CardStyle = styled.div`
  border: 1px solid black;
  color: white;
  background-color: green;
  border: 10px solid red;
  border-radius: 20px;
  /* background: ${(props) =>
    props.$background ? `url(${props.$background}) center/cover` : "white"}; */
`;

const Image = styled.div`
  background: ${(props) =>
    props.$background ? `url(${props.$background}) center/cover` : "white"};
  min-height: 26rem;
  min-width: 20rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  align-items: center;
`;

const CardStat = styled.li`
  background-color: beige;
  color: black;
  padding: 3px 7px 3px 7px;
`;

function Card({ card }) {
  return (
    <>
      <CardStyle
        key={card._id}
        $background={card.image.url}
      >
        <CardHeader>
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
          <StatsUl>
            <CardStat key="int">
              Intelligence: {card.powerstats.intelligence}
            </CardStat>
            <CardStat key="str">Strength: {card.powerstats.strength}</CardStat>
            <CardStat key="speed">Speed: {card.powerstats.speed}</CardStat>
            <CardStat key="durability">
              Durability: {card.powerstats.durability}
            </CardStat>
            <CardStat key="power">Power: {card.powerstats.power}</CardStat>
            <CardStat key="combat">Combat: {card.powerstats.combat}</CardStat>
          </StatsUl>
        </Image>
      </CardStyle>
    </>
  );
}

export default Card;
