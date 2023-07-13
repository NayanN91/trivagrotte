import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/card";
import ContextHome from "./components/ContextHome";
import Filters from "./components/filter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./app.css";


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
    
    <><div>
      <Navbar />
    </div>
    <img className="grotteprincipal"
    src="src\assets\image grotte principal.png" alt="image grotte"></img>
      <Filters
          onFilterChange={handleFilterChange}
          numberRes={filteredGrottezer.length} />
    <div className="ContextHomeContainer">
      <ContextHome />
    </div><div className="App">
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
            capacity={card.max_capacity} />
        ))}
      </div><div className="App">
        {grottezer.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            img={card.img}
            region={card.region}
            price={card.price} />
        ))}
      </div>
      <img className="grottesecondaire"
      src="\src\assets\image grotte secondaire.png" alt="image grotte secondaire" ></img>
      <Footer />
      </>
      
  );
}

export default App;
