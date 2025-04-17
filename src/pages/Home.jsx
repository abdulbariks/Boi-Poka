import React from "react";
import Books from "./Books";
import Banner from "../components/Banner/Banner";

// const bookdPromise = fetch("booksData.json").then((res) => res.json());
const Home = () => {
  // const books = use(bookdPromise);
  // console.log(books);

  return (
    <div>
      <Banner></Banner>
      {/* <Books books={books}></Books> */}
      <Books></Books>
    </div>
  );
};

export default Home;
