import React, { Component } from "react";
import a from "./mailcastr.png";
import { Button } from "antd";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src={a} className="logo-pic-size" />
          <p className="logo-name">mailcastr</p>
          <div className="button-region">
            <Button
              size="large"
              style={{ margin: "5px 10px 0px 0px" }}
              className="product-tour-button"
            >
              Product Tour
            </Button>
            <Button size="large" className="plan-button">
              Plan
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
