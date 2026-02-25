import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignInForm } from "./components/SignInForm/SignInForm";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { Home } from "./components/Home/Home";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/sign-up",
                element:<RestrictedRoute element={SignUpForm} restrictedTo={"/tasks"}/>, 
            },
            {
                path: "/sign-in",
                element: <RestrictedRoute element={SignInForm} restrictedTo={"/tasks"}/>,

            },
            {
                path:"/tasks",
                element: <PrivateRoute element={SignUpForm} restrictedTo={"/sign-up"}/>,
            }
            
        ], 
    }
])