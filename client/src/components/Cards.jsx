import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

function Cards() {
  const { cardsData } = useOutletContext();

  return (
    <div>
      Cards!
      {cardsData.map((card) => (
        <>
          <h2 key={card._id}>{card.name}</h2>
          <h3>Power Stats</h3> <hr />
          <ul>
            <li>Intelligence: {card.powerstats.intelligence}</li>
            <li>Strength: {card.powerstats.strength}</li>
            <li>Speed: {card.powerstats.speed}</li>
            <li>Durability: {card.powerstats.durability}</li>
            <li>Power: {card.powerstats.power}</li>
            <li>Combat: {card.powerstats.combat}</li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Cards;
