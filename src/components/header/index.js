import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerLogo from "./headerLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import "../../../src/App.css";

export default function Header() {
  return (
    <Container>
      <Row className="headerItems">
        <Col className="address" md={{ order: 1 }}>
          <a
            className="links"
            href="https://www.google.com/maps/place/Painted+by+The+Bee/@33.8810534,-84.5160204,17z/data=!3m1!4b1!4m5!3m4!1s0x88f511e28ee0a3f7:0xe3c366267fb1a8c!8m2!3d33.8810227!4d-84.5138149"
            target="_blank"
            rel="noopener noreferrer"
          >
            2968 Atlanta Road SE <br /> Smyrna, Georgia 30080
          </a>
        </Col>
        <Col className="logo" xs={{ order: "first" }} md={{ order: 2 }}>
          <img src={headerLogo} alt="painted-by-the-bee-logo" />
        </Col>
        <Col className="phoneNumber" xs={{ order: "last" }} md={{ order: 3 }}>
          <a className="links" href="tel:1 (412) 381-5500">
            1 (770) 401-6458
          </a>
        </Col>
      </Row>
    </Container>
  );
}
