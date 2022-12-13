import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserLoginProvide } from "./contexts/LoginUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <UserLoginProvide>
                <App />
            </UserLoginProvide>
        </Router>
    </React.StrictMode>
);
