import { RouterProvider } from "react-router-dom";
import { routing } from "./pages/router";

export const App = () => {
  return <RouterProvider router={routing} />;
};
