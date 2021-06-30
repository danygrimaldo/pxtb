import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { First, Last } from "react-bootstrap/esm/PageItem";
import "../../../src/App.css";
import image1 from "./Craggy_Kitchen1.png";
import image2 from "./Craggy_Kitchen2.png";
import image3 from "./Craggy_Kitchen3.png";

export const Services = () => {
  return (
    <Container>
      <h1>Custom Furniture Painting</h1>
      <Row>
        <Col className="main" xs={12} md={{ order: First }}>
          <i>
            <b>Painted By The Bee</b>{" "}
          </i>
          offers custom furniture painting services. Each item is painted by
          hand with a brush. If you are looking for a one of a kind furniture
          transformation with character send us an email with a picture and your
          desired outcome and we can give you a quote – email us at{" "}
          <a href="mailto:info@paintedbythebee.com">info@paintedbythebee.com</a>
          <br />
          <br />
          All furniture items need to be delivered to our Smyrna location. Once
          a drop off date and pickup date have been established we will email
          you. We will contact you a few days before completion. Items are
          expected to be picked up within a couple days of completion since we
          have a small shop with minimal storage space.
          <br />
          <br />
          <h4>The Process</h4>
          1. You can email us a couple images of your piece of furniture.
          Include the measurements of your piece and what you are looking for as
          an outcome for example “I want a european aged look or a more modern
          finished look”. If you are looking for additional things such as knobs
          changed or dark waxed applied please let us know this as well so we
          can include this in your estimate. Also include you color selection or
          idea.
          <br />
          <br />
          2. We will email you back with an estimate for the work as well as a
          recommended color . We will also include a drop off time and pick up
          time for your project. You are responsible for finding transportation
          for your furniture. We offer Pick up and delivery for a small fee.
          <br />
          <br />
          3. Once the estimate has been provided you are required to provide 50%
          of the deposit at the time of scheduling. This will secure your
          appointment. Please send back you signed contract with the deposit.
          Most custom furniture painting project take 1-4 weeks depending on the
          size and our schedule. We love helping our customers give their
          current furniture new life. We can guide you through the process of
          picking out a color, style and hardware to ensure the end result is a
          fresh piece of furniture that fits right in with your home's decor and
          reflects your personal style. We are happy to provide in-home
          consultation to help ensure you end up with the perfect piece. There
          is a $75/hr consultation fee for this service.
        </Col>
        <Col>
          <Figure md={{ order: Last }}>
            <Figure.Image
              className="services-thumbnails"
              alt="171x180"
              src={image1}
            />
            <Figure.Image
              className="services-thumbnails"
              alt="171x180"
              src={image2}
            />
            <Figure.Image
              className="services-thumbnails"
              alt="171x180"
              src={image3}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
