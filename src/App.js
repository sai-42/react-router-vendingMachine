import React, { Component } from "react";
import Chips from "./Chips";
import Coffee from "./Coffee";
import Soda from "./Soda";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/coffee" render={() => <Coffee />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;
