import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import a from "./box2image.JPG";
import "./box2.css";
export default class Box2 extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="div-size">
          <Row gutter={8}>
            <Col span={14}>
              <div>
                <p className="heading-style">Cold outreach and campaigns</p>
                <p className="para-style">
                  We're at the dawn of a UI revolution. Not only will multimodal
                  interfaces will give users more power, but they will also
                  change the way users interact with the systems.
                </p>
                <Button
                  style={{
                    borderRadius: "40px",
                    color: "#3E13B4",
                    border: "2px solid #3E13B4",
                    fontWeight: "bold"
                  }}
                  size="large"
                >
                  How it Happens?
                </Button>
              </div>
            </Col>
            <Col span={10}>
              <div>
                <img src={a} className="image-size" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
