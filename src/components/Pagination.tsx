import React from 'react';
import { FC } from "react";
import './style.css';
import { Paginationdesign} from "./style"

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
          <div key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </Paginationdesign>
    </nav>
  );
};

export default Pagination;
