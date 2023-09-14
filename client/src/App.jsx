import { useEffect, useState } from "react";
import { Outlet } from "react-router";
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
      <h1>Header (navBar)!</h1>
      <Outlet context={{ cardsData: cardsData }} />
      <h2>This is footer</h2>
    </>
  );
}

export default App;
