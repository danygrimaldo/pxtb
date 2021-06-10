import React from "react";
import { Container, Col, Row, Figure } from "react-bootstrap";
import { First, Last } from "react-bootstrap/esm/PageItem";
import ReactPlayer from "react-player/youtube";
import stockistLogo from "./US_AS_Stockist-logo.jpg";
import "../../../src/App.css";
import Swatches from "../../components/swatches";

export const ChalkPaint = () => {
  return (
    <Container className="main">
      <Row className="mb-5">
        <Col className="mb-4" lg={{ order: First }}>
          <ReactPlayer width="100%" url="https://youtu.be/TWYOQMWZ2zU" />
        </Col>

        <Col lg={{ order: Last }}>
          <div>
            <strong>What is Chalk Paint® by Annie Sloan?</strong>
            <br />
          </div>
          <div className="my-2"></div>
          <p>
            Annie Sloan created Chalk Paint® decorative paint in 1990. It's the
            quick and easy way to get colourful! Use it to paint furniture,
            floors, walls – even to dye fabric. You can paint it thickly for a
            textured finish or dilute it for a smooth finish – add even more
            water for a washed wood look or to create a stain.
          </p>

          <p>
            Chalk Paint® is suitable for beginners and for furniture painting
            professionals alike; it’s the fool-proof furniture paint which can
            be used to create any look you require. From colour-blocked, modern
            interiors, to pine bedside tables in need of a revamp, or authentic
            aged rustic effects fit for much-loved heirlooms, Chalk Paint® can
            solve all your furniture dilemmas. Ready to get started? Learn how
            to use the paint and find inspiration at{" "}
            <a
              href={"https://www.anniesloan.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.anniesloan.com
            </a>
          </p>

          <div>
            <a
              href={"https://www.youtube.com/user/AnnieSloanOfficial"}
              target="_blank"
              rel="noopener noreferrer"
            >
              See more tutorials
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Figure>
          <Figure.Image
            className="as-logos"
            alt="Stockist Logo"
            src={stockistLogo}
          />
          <h1 className="m-auto">
            COLOR
            <br />
            SWATCHES
          </h1>
        </Figure>
      </Row>
      <Row>
        <Swatches />
      </Row>
    </Container>
  );
};
