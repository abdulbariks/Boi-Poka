import React, { Suspense, useEffect, useState } from "react";
import Book from "./Book";
// import { useLoaderData } from "react-router";

const Books = () => {
  // const books = useLoaderData();
  // console.log(books);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center p-6">Books</h1>
      <Suspense fallback={<span>loading......</span>}>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {allBooks?.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
