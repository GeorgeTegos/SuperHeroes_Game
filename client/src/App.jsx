import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/cards")
      .then((res) => res.json())
      .then((data) => setCardsData(data));
  }, []);

  return (
    <>
      {cardsData.map((card) => (
        <h2 key={card._id}>{card.name}</h2>
      ))}
    </>
  );
}

export default App;
