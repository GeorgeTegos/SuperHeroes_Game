import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/cards")
      .then((res) => res.json())
      .then((data) => setCardsData(data));
  }, []);

  return (
    <>
      <Header />

      <Outlet context={{ cardsData: cardsData }} />
      <h2>This is footer</h2>
    </>
  );
}

export default App;
