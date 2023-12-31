import React from "react";
import "../Pagination.css";

const Pagination = ({ postsPerPage, totalPosts,paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a  
            onClick={()=>paginate(number)}
             className="page-link"
             style={{cursor:"pointer"}}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
