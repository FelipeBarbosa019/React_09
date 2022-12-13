import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Update from "./pages/Update";

import { UserLoginProvide } from "./contexts/LoginUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <UserLoginProvide>
                <Login />
            </UserLoginProvide>
        ),
        // loader: rootLoader,
    },
    {
        path: "/register",
        element: (
            <UserLoginProvide>
                <Register />
            </UserLoginProvide>
        ),
    },
    {
        path: "/update",
        element: (
            <UserLoginProvide>
                <Update />
            </UserLoginProvide>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
