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
        <Col className="mb-5" xs={12} md={{ order: First }}>
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/TWYOQMWZ2zU"
          />
        </Col>
        <Col xs={12} md={{ order: Last }}>
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
            water for a washed wood look or to create a stain. Ready to get
            started? Learn how to use the paint and find inspiration at{" "}
            <a href={"https://www.anniesloan.com"}>www.anniesloan.com</a>
          </p>

          <div>
            <a href={"https://www.youtube.com/user/AnnieSloanOfficial"}>
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
