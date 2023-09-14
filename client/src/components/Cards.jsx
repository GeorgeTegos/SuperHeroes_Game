import React from "react";
import { useOutletContext } from "react-router";

function Cards() {
  const { cardsData } = useOutletContext();

  return (
    <div>
      Cards!
      {cardsData.map((card) => (
        <h2 key={card._id}>{card.name}</h2>
      ))}
    </div>
  );
}

export default Cards;
