import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerLogo from "./headerLogo.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="justify-content-md-center">
      <Row>
        <Col xs={(12, { order: 2 })} md={(4, { order: 1 })}>
          2968 Atlanta Road SE, Smyrna, Georgia 30080
        </Col>
        <Col xs={(12, { order: 1 })} md={(4, { order: 2 })}>
          <img src={headerLogo} alt="painted-by-the-bee-logo" />
        </Col>
        <Col xs={(12, { order: 3 })} md={(4, { order: 3 })}>
          770.401.6458
        </Col>
      </Row>
    </Container>
  );
}
