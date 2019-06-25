import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Coffee.css";

class Coffee extends Component {
  render() {
    return (
      <div
        className="Coffee"
        style={{
          backgroundImage:
            "url(https://media1.tenor.com/images/1362f10ace04031b2914b2dd6a0a906f/tenor.gif?itemid=9728212)"
        }}
      >
        <Message>
          <h1>Will code for coffee.</h1>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Coffee;
