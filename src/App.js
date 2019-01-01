import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ alignItems: "center", width: "70%" }}>
        <Button type="primary" style={{ display: "flex" }}>
          Welcome TO the MailCastr-app..
        </Button>
      </div>
    );
  }
}

export default App;
