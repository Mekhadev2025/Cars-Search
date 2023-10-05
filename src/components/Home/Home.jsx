import React from "react";
import "../Home/Home.css";
import Card from "../Cards/Card";
import data from "../../data";

const Home = () => {
  return (
    <div className="cards-wrapper">
      {data.map((item) => (
        <Card value={item} />
      ))}
    </div>
  );
};

export default Home;