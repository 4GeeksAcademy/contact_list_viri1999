import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Contact} />
      <Route exact path="/add" component={AddContact} />
      <Route exact path="/edit/:id" component={AddContact} />
    </Switch>
  );
};

export default Layout;