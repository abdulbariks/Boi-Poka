import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addReadList } from "../utility/LocalStorage";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const books = useLoaderData();
  //   console.log(books);

  const bookDetails = books.find((book) => book.bookId === bookId);
  console.log(bookDetails);

  const {
    bookName,
    author,
    image,
    review,
    tags,
    publisher,
    rating,
    category,
    totalPages,
    yearOfPublishing,
  } = bookDetails || {};

  const handleReadList = (id) => {
    console.log(id);
    addReadList(id);
  };
  const handleSaveList = (id) => {
    console.log(id);
  };
  return (
    <div className="w-11/12 mx-auto  grid grid-cols-3 gap-5 mt-5">
      <div className="col-span-2">
        <h2 className="text-5xl font-bold mt-3 truncate">{bookName}</h2>
        <h2 className="text-2xl font-bold mt-1"> {author}</h2>
        <p className="mt-3">{review}</p>
        <div className="grid grid-cols-3 m-3">
          <p className="flex gap-3 font-bold">
            Tags :{" "}
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </p>
          <p className="font-bold">Rating: {rating}</p>
          <p className="font-bold truncate">Publisher: {publisher}</p>
          <p className="font-bold">Category: {category}</p>
          <p className="font-bold">Total Pages:{totalPages}</p>
          <p className="font-bold">Publishing Year: {yearOfPublishing}</p>
        </div>
        <div class="card-actions justify-end mt-3">
          <div
            onClick={() => handleReadList(bookId)}
            class="badge badge-outline cursor-pointer font-bold"
          >
            ReadList
          </div>
          <div
            onClick={() => handleSaveList(bookId)}
            class="badge badge-outline cursor-pointer font-bold"
          >
            SaveList
          </div>
        </div>
      </div>
      <div>
        <img className="w-96 h-96" src={image} alt="" />
      </div>
    </div>
  );
};

export default BookDetails;
