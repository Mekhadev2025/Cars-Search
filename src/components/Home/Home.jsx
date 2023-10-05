import React from "react";
import "../Home/Home.css";
import Card from "../Cards/Card";
import data from "../../data";

const Home = (props) => {
  const searchValue = props.values;
 
  const filteredData = searchValue
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;  

  return (
    <div className="cards-wrapper">
      {filteredData.map((item) => (
        <Card key={item.id} value={item} />
      ))}
    </div>
  );
};

export default Home;
