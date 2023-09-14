import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer.jsx";
import Cards from "./components/Cards.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeContainer />} />
          <Route path="/cards" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
