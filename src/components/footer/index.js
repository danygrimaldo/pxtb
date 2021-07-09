import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../../../src/App.css";

export default function Footer() {
  return (
    <Container>
      <hr class="rounded" />
      <Row className="footer">
        <Col className="grimaldoMedia">
          <a
            href="https://danygrimaldo.github.io/Grimaldo-Media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; Powered by Grimaldo Media {new Date().getFullYear()}
          </a>
        </Col>
        <Col className="socialMedia">
          <SocialIcon
            className="mr-2"
            url="https://instagram.com/paintedbythebee"
            bgColor="#334049"
            fgColor="#F6BE00"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://facebook.com/Painted-By-The-Bee-207610716796420"
            fgColor="#334049"
            bgColor="#F6BE00"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
      </Row>
    </Container>
  );
}
