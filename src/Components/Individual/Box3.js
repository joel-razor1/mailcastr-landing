import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import a from "./box3image.JPG";
import "./box3.css";
export default class Box3 extends Component {
  render() {
    return (
      <div>
        <div className="div-size">
          <Row gutter={8}>
            <Col span={12}>
              <div>
                <img src={a} className="image-size1" />
              </div>
            </Col>
            <Col span={12}>
              <p className="heading-style">Know when your mails are opened.</p>
              <p className="para-style">
                We're at the dawn of a UI revolution. Not only will multimodal
                interfaces will give users more power, but they will also change
                the way users interact with the systems.
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
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
