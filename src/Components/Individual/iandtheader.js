import React, { Component } from "react";
import { Icon, Button } from "antd";
import a from "./mailcastr.png";
import { Link } from "react-router-dom";

export default class iandtheader extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src={a} className="logo-pic-size" />
          <p className="logo-name">mailcastr</p>
          <Icon type="left" />
          <Link to="/">Back to home</Link>
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
