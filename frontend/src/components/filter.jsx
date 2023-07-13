import React, { useState, useEffect } from "react";
import axios from "axios";

import "./filter.css";

export default function Filters({ onFilterChange, numberRes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [capacityOptions, setCapacityOptions] = useState([]);
  const [regionOptions, setRegionOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCapacityChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCapacity(selectedOption);
  };

  const handleRegionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedRegion(selectedOption);
  };

  const handlePriceChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedPrice(selectedOption);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:6969/Grottezer");
        const data = response.data;
        const uniqueCapacities = [
          ...new Set(data.map((item) => item.max_capacity)),
        ];
        const uniqueRegions = [...new Set(data.map((item) => item.region))];
        const uniquePrices = [...new Set(data.map((item) => item.price))];
        setCapacityOptions(uniqueCapacities);
        setRegionOptions(uniqueRegions);
        setPriceOptions(uniquePrices);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    onFilterChange(selectedCapacity, selectedRegion, selectedPrice);
  }, [selectedCapacity, selectedRegion, selectedPrice, onFilterChange]);

  return (
    <div className={`filter-menu-burger ${isMenuOpen ? "menu-open" : ""}`}>
      <div className={`filter ${isMenuOpen ? "hide" : ""}`}>
        <select
          className="filter-nav"
          value={selectedCapacity}
          onChange={handleCapacityChange}
        >
          <option value="">Capacity</option>
          {capacityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="filter-nav"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Location</option>
          {regionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="filter-nav"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value="">Price</option>
          {priceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p> ( {numberRes} ) Results</p>
      </div>
      <div className={`menu-burger-filter ${isMenuOpen ? "" : "hide"}`}>
        <div className="menu-icon">
          <input
            id="burger-menu-icone"
            type="image"
            src="./src/assets/img/filters.png"
            alt="menu"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <>
              <select
                className="filter-menu"
                value={selectedCapacity}
                onChange={handleCapacityChange}
              >
                <option value="">Capacity</option>
                {capacityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="filter-menu"
                value={selectedRegion}
                onChange={handleRegionChange}
              >
                <option value="">Region</option>
                {regionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="filter-menu"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                <option value="">Price</option>
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
