import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
const data = [
  {
    bookId: 1,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 192,
    rating: 4.5,
    category: "Classic",
    tags: ["Fiction", "Romance"],
    publisher: "Scribner",
    yearOfPublishing: 1925,
  },
  {
    bookId: 2,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 281,
    rating: 4.8,
    category: "Fiction",
    tags: ["Drama", "Social Justice"],
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960,
  },
  {
    bookId: 3,
    bookName: "1984",
    author: "George Orwell",
    image: "https://i.ibb.co.com/MprDyVt/51-BIA4rrae-L-AC-UF1000-1000-QL80.jpg",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 328,
    rating: 4.6,
    category: "Fiction",
    tags: ["Dystopian", "Political"],
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949,
  },
  {
    bookId: 4,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 5,
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 279,
    rating: 4.7,
    category: "Classic",
    tags: ["Romance", "Satire"],
    publisher: "T. Egerton, Whitehall",
    yearOfPublishing: 1813,
  },
  {
    bookId: 6,
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 310,
    rating: 4.9,
    category: "Fantasy",
    tags: ["Adventure", "Epic"],
    publisher: "Allen & Unwin",
    yearOfPublishing: 1937,
  },
];
const Statistics = () => {
  return (
    <div className="flex items-center justify-center pt-10 ">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis dataKey="yearOfPublishing" />
        <Tooltip />
        <Legend />
        <Bar dataKey="publisher" fill="#8884d8" />
        <Bar dataKey="author" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
