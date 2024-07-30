import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Contact} />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={AddContact} />
      </Switch>
    </>
  );
};

export default Layout;
