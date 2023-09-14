import React from "react";
import { useOutletContext } from "react-router";

function HomeContainer() {
  const { cardsData } = useOutletContext();
  return (
    <>
      <div>This is HomeContainer</div>
      {cardsData.map((card) => (
        <h2 key={card._id}>{card.name}</h2>
      ))}
    </>
  );
}

export default HomeContainer;
