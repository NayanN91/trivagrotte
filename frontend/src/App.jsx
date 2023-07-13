import React, { useState, useEffect } from "react";
import { AuthProvider } from "./components/AuthContext";
import Card from "./components/card";
import axios from "axios";

import Navbar from "./components/Navbar";
import "./app.css";
import "./App.css";
import "./components/Navbar.css";
import Filters from "./components/filter";

function App() {
  const [grottezer, setGrottezer] = useState([]);
  const [filteredGrottezer, setFilteredGrottezer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:6969/Grottezer");
        const data = response.data;
        setGrottezer(data);
        setFilteredGrottezer(data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (
    selectedCapacity,
    selectedLocation,
    selectedPrice
  ) => {
    let filteredData = grottezer;

    if (selectedCapacity !== "") {
      filteredData = filteredData.filter(
        (item) => item.max_capacity === selectedCapacity
      );
    }

    if (selectedLocation !== "") {
      filteredData = filteredData.filter(
        (item) => item.region === selectedLocation
      );
    }

    if (selectedPrice !== "") {
      filteredData = filteredData.filter(
        (item) => item.price === selectedPrice
      );
    }

    setFilteredGrottezer(filteredData);
  };

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />

        <Filters
          onFilterChange={handleFilterChange}
          numberRes={filteredGrottezer.length}
        />

        {filteredGrottezer.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.img}
            region={card.region}
            price={card.price}
            feu={card.feu}
            piscine={card.piscine}
            capacity={card.max_capacity}
          />
        ))}
      </div>
    </AuthProvider>
  );
}

export default App;
