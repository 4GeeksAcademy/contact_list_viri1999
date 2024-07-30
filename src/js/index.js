import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./store/flux";
import Layout from './Layout';


import "../styles/index.css";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Layout />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
