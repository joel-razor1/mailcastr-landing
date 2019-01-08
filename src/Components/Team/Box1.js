import React, { Component } from "react";
import { Row, Col } from "antd";
import a from "./1.svg";
import b from "./2.svg";
import c from "./3.svg";
import "./box1.css";
export default class Box1 extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="align">
          <Row>
            <Col span={8}>
              <div>
                <img src={a} width="10%" height="auto" />
                <br />
                <br />

                <p style={{ color: "#706da5", fontSize: "1.6rem" }}>
                  Reach at scale .
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img src={b} width="10%" height="auto" />
                <br />
                <br />
                <p style={{ color: "#706da5", fontSize: "1.6rem" }}>
                  Automated Campaigns.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img src={c} width="10%" height="auto" />
                <br />
                <br />
                <p style={{ color: "#706da5", fontSize: "1.6rem" }}>
                  Team Reports.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
