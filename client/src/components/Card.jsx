import React from "react";
import styled, { css } from "styled-components";

const CardStyle = styled.div`
  border: 1px solid black;
  color: white;
  min-width: 22rem;
  background: ${(props) =>
    props.$background ? `url(${props.$background}) center/cover` : "white"};
`;

const StatsUl = styled.ul`
  list-style-type: none;
`;

function Card({ card }) {
  return (
    <>
      <CardStyle key={card._id} $background={card.image.url}>
        <h2>{card.name}</h2>
        <h3>Power Stats</h3>
        <StatsUl>
          <li key="int">Intelligence: {card.powerstats.intelligence}</li>
          <li key="str">Strength: {card.powerstats.strength}</li>
          <li key="speed">Speed: {card.powerstats.speed}</li>
          <li key="durability">Durability: {card.powerstats.durability}</li>
          <li key="power">Power: {card.powerstats.power}</li>
          <li key="combat">Combat: {card.powerstats.combat}</li>
        </StatsUl>
      </CardStyle>
    </>
  );
}

export default Card;
