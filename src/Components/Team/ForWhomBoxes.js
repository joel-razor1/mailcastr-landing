import React, { Component } from "react";
import "./ForWhomBoxes.css";

export default class ForWhomBoxes extends Component {
  render() {
    return (
      <div>
        <div className="flexIt">
          <div className="who-boxes">
            <p className="text-style">Bloggers</p>
          </div>
          <div className="who-boxes">
            <p className="text-style">Freelancers</p>
          </div>
          <div className="who-boxes">
            <p className="text-style">Teachers</p>
          </div>
          <div className="who-boxes">
            <p className="text-style">HR Professionals</p>
          </div>
          <div className="who-boxes">
            <p className="text-style">Personal</p>
          </div>
        </div>
      </div>
    );
  }
}
