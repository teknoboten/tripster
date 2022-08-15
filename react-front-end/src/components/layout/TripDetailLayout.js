import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap";
import Col from "react-bootstrap";

function TripDetailLayout() {
  return (
    <Container>
      <Row>
        <Col xs={8} className="square border">map</Col>
        <Col>img grid</Col>
      </Row>
    </Container>
  );
}

export default TripDetailLayout;