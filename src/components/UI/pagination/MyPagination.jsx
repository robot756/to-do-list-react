import React from 'react'
import { getPagesArray } from '../../../utils/pages';

const MyPagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__content">
      {pagesArray.map((post) => (
        <span
          key={post}
          className={page === post ? ' page page__current' : 'page'}
          onClick={() => changePage(post)}
        >
          {post}
        </span>
      ))}
    </div>
  )
}

export default MyPagination