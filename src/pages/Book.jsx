import React from "react";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookId, bookName, author, image, review } = singleBook;

  return (
    <div className="card bg-base-100 w-72 shadow-sm">
      <figure>
        <img className="w-32 h-32 rounded-md" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <h3 className="badge badge-secondary">{author}</h3>
        <p className="line-clamp-2">{review}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">ReadList</div>
          <div className="badge badge-outline">SaveList</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
