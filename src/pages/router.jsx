import { createBrowserRouter } from "react-router-dom";
import { MainPages } from "./MainPages";
import { MoviesPages } from "./MoviesPages";
import { Layout } from "../../Layout";
import { Movie } from "./Movie";
import { fetchMovieDetails } from "./Fetch";
import { ErrorPage } from "./Error";
import { Review } from "./review";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true,
        element: <MainPages /> 
      },
      {
        path: "/movies",
        element: <MoviesPages />,
      },
      {
        path: "/movie/:movieId",
        element:<Movie/>,
        loader: fetchMovieDetails,
        children:[{
          path:"/movie/:movieId/review",
          element:<Review/>,
        }] ,
      },
    ],
  },
]);
