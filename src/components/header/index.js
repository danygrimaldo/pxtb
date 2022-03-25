import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerLogo from "./headerLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Home } from "../../pages/Home";
import "../../../src/App.css";

export default function Header() {
  return (
    <Container>
      <Row className="headerItems">
        <Col className="address" md={{ order: 1 }}>
          <a
            className="links"
            href="https://www.google.com/maps/place/bobbie+sharma+(The+Treehouse)/@33.8437823,-84.4926701,17z/data=!3m1!4b1!4m5!3m4!1s0x88f510cf2d2e02c3:0xea2ff4940979a60b!8m2!3d33.8437846!4d-84.4904706"
            target="_blank"
            rel="noopener noreferrer"
          >
            4500 W Village Place
            <br />
            Suite 1010
            <br />
            Smyrna, GA 30080
          </a>
        </Col>
        <Col className="logo" xs={{ order: "first" }} md={{ order: 2 }}>
          <a href="/" src={Home}>
            <img src={headerLogo} alt="painted-by-the-bee-logo" />
          </a>
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
