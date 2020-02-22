import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import "./styles.css";

import App from "./App";
import DefaultErrorReactBoundary from "./DefaultErrorReactBoundary";

ReactDOM.render(
    <React.StrictMode>
        <DefaultErrorReactBoundary>
            <App />
        </DefaultErrorReactBoundary>
    </React.StrictMode>,
    document.getElementById("app")
);
