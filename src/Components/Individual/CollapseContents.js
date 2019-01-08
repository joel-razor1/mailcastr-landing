import React, { Component } from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";

export default class CollapseContents extends Component {
  render() {
    return (
      <div>
        <div>
          <Box1 />
          <br />
          <br />
          <br />
          <br />
          <Box2 />
          <br />
          <br />
          <br />
          <br />
          <Box3 />
          <br />
          <br />
          <br />
          <br />
          <Box4 />
        </div>
      </div>
    );
  }
}
