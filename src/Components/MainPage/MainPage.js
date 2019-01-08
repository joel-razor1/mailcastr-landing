import React, { Component } from "react";
import a from "./pic1.JPG";
import Header from "../Header/Header";
import "./MainPage.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="image-region">
          <img src={a} />
        </div>
        <div className="heading-region">
          <p className="big-heading">Email productivity for freelancers |</p>
          <p className="small-heading">
            Get 10x more replies by sending the right kind of email at the right
            time.
          </p>
          <br />
          <div className="button-region1">
            <p style={{ marginRight: "10px" }}>I'm a </p>
            <Link to="/individual">
              <Button type="primary" size="large" className="individual-button">
                Individual
              </Button>
            </Link>
            <Link to="/team">
              <Button type="primary" size="large" className="team-button">
                Team Member
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
