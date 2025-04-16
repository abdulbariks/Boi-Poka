import React, { use } from "react";
import Books from "./Books";
import Banner from "../components/Banner/Banner";

const bookdPromise = fetch("booksData.json").then((res) => res.json());
const Home = () => {
  const books = use(bookdPromise);
  console.log(books);

  return (
    <div>
      <h2>this is home page</h2>
      <Banner></Banner>
      {/* <Books books={books}></Books> */}
    </div>
  );
};

export default Home;
