import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerLogo from "./headerLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function Header() {
  return (
    <Container>
      <Row className="headerItems">
        <Col className="address" md={{ order: 1 }}>
          2968 Atlanta Road SE <br /> Smyrna, Georgia 30080
        </Col>
        <Col className="logo" xs={{ order: "first" }} md={{ order: 2 }}>
          <img src={headerLogo} alt="painted-by-the-bee-logo" />
        </Col>
        <Col className="phoneNumber" xs={{ order: "last" }} md={{ order: 3 }}>
          770.401.6458
        </Col>
      </Row>
    </Container>
  );
}
