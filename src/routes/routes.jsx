import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Books from "../pages/Books";

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
        path: "*",
        element: <h3>Not Found: 404 Status</h3>,
      },
    ],
  },
]);
