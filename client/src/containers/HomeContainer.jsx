import React from "react";
import { useOutletContext } from "react-router";

function HomeContainer() {
  const { cardsData } = useOutletContext();
  return (
    <>
      <div>This is HomeContainer</div>
    </>
  );
}

export default HomeContainer;
