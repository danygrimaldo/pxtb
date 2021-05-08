import React from "react";
import { Container, Col } from "react-bootstrap";
import "../../../src/App.css";

export const Workshops = () => {
  return (
    <Container>
      <h1>
        Annie Sloan Chalk Paint®
        <br />
        Workshops
      </h1>
      <Col className="main">
        <h4 className="my-0 py-0">The Essentials Workshop</h4>
        <p>
          <i>Introducing the Annie Sloan Method</i>
        </p>
        This is a beginner/intermediate workshop taught by a certified Annie
        Sloan Chalk Paint instructor. You'll learn several hands-on-painting
        techniques, along with the proper application of waxes and gilding wax.
        Bring yourself (or a girlfriend or two), everything else is provided! By
        attending the workshop you'll also receive 15% off any paint or paint
        accessories you purchase the end of the class.
        <br />
        <br />
        <h4 className="my-0 py-0">Open Studio Workshop</h4>
        <p>
          <i>DIY Projects From Home</i>
        </p>
        Complete an entire piece during our workshop and learn techniques along
        the way! Bring your own small piece (small enough to fit in the
        passenger side of your car and you can easily carry like a small side
        table). Purchase your paint and wax at a 15% discount the day of the
        class, you may use our workshop brushes.
      </Col>
    </Container>
  );
};
