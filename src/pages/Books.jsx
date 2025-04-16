import React from "react";
import { useLoaderData } from "react-router";

const Books = () => {
  const books = useLoaderData();
  console.log(books);

  return (
    <div>
      <h3>this is books page</h3>
    </div>
  );
};

export default Books;
