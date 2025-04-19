import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Statistics from "../pages/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "books",
        // loader: () => fetch("booksData.json"),
        Component: Books,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/statistics",
        Component: Statistics,
      },

      {
        path: "*",
        element: <h3>Not Found: 404 Status</h3>,
      },
    ],
  },
]);
