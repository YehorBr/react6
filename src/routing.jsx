import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./mainPage/MainPage";
import { Movies } from "./movies/movies";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },{
        path: "/movie/:id"
      }
    ],
  },
]);
