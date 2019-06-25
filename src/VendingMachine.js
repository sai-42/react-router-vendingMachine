import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>
            Hello, I'm a vending machine. What would you like to eat/drink ?
          </h1>
        </Message>
        <Message>
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/coffee">Coffee</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
