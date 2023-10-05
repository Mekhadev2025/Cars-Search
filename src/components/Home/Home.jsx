import React, { useState } from "react";
import "../Home/Home.css";
import Card from "../Cards/Card";
import data from "../../data";

const Home = (props) => {
  const [currentPage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const searchValue = props.values;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const filteredData = searchValue
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : currentPosts;

  return (
    <div className="cards-wrapper">
      {filteredData.map((item) => (
        <Card key={item.id} value={item} />
      ))}
    </div>
  );
};

export default Home;
