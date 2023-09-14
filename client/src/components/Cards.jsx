import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";
import Card from "./Card";

const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

function Cards() {
  const { cardsData } = useOutletContext();

  return (
    <>
      <h2> Cards! </h2>
      <hr />
      <CardsWrapper>
        {cardsData.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </CardsWrapper>
    </>
  );
}

export default Cards;
