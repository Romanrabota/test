import React from 'react';
import { FC } from "react";
import { Paginationdesign,Pageitem,Pagelink} from "./style"

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}



const Pagination:FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Paginationdesign>
        {pageNumbers.map(number => (
          <Pageitem>
          <div key={number} >
          
            <a onClick={() => paginate(number)} href='!#'>
            <Pagelink>
            <div>{number}</div> </Pagelink>  
            </a>
            </div>
          </Pageitem>
        ))}
      </Paginationdesign>
    </nav>
  );
};

export default Pagination;
