import React from "react";
import { NavLink } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);
  const { bookId, bookName, author, image, review, tags } = singleBook;

  return (
    <NavLink to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-72 shadow-sm">
        <figure>
          <img className="w-32 h-32 rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title truncate">{bookName}</h2>
          <h3 className="badge badge-secondary">{author}</h3>
          <p className="line-clamp-2">{review}</p>
          <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
