import React, { Component } from "react";
import Header from "./iandtheader";
import { Row, Col, Icon } from "antd";
import "./individual.css";
import ForWhomBoxes from "./ForWhomBoxes";
import CollapseContents from "./CollapseContents";
import a from "./individual1.JPG";

export default class Individual extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <div className="box1">
          <Row>
            <Col span={12}>
              <div className="col1">
                <p className="box1-heading">It's all for individuals.</p>
                <p className="box1-para">
                  We are at the dawn of a UI revolution. Not only will
                  muultimodal interfaces gives users more power, but they will
                  also change the way users interact with the systems.
                </p>
                <ForWhomBoxes />
              </div>
            </Col>
            <Col span={12}>
              <div className="col2">
                <img src={a} className="pic1-size" />
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#706da5"
            }}
          >
            Make life easier, how?
            <br />
            <Icon type="down" />
          </p>
        </div>
        <div>
          <CollapseContents />
        </div>
      </div>
    );
  }
}
