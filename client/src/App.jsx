import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/cards'>Cards</Link>
      </li>


      <Outlet context={{ cardsData: cardsData }} />
      <h2>This is footer</h2>
    </>
  );
}

export default App;
