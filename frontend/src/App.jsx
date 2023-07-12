import React, { useState, useEffect } from "react";
import Card from "./components/card";
import axios from "axios";
import AuthPage from "./components/AuthPage";
import Navbar from "./components/Navbar";
import "./app.css";
import "./App.css";
import "./components/Navbar.css";

function App() {
  const [grottezer, setGrottezer] = useState([]);

  useEffect(() => {
    const getGrottezer = async () => {
      try {
        const response = await axios.get("http://localhost:4242/Grottezer");
        const grotteData = response.data;
        setGrottezer(grotteData);
      } catch (error) {
        console.log("Error fetching Grottezer data:", error);
      }
    };

    getGrottezer();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AuthPage />
      {grottezer.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          img={card.img}
          region={card.region}
          price={card.price}
        />
      ))}
    </div>
  );
}

export default App;
