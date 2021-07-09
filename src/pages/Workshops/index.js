import React from "react";
import { Container, Col, Image, Row, Table } from "react-bootstrap";
import "../../../src/App.css";
// import { InlineWidget } from "react-calendly";
import workshopStock1 from "./Images/workshop_01.jpg";
import workshopStock2 from "./Images/workshop_02.jpg";
import workshopStock3 from "./Images/workshop_03.jpg";

export const Workshops = () => {
  return (
    <Container>
      <h1>
        Annie Sloan Chalk Paint®
        <br />
        Workshops
      </h1>
      <Row className="mb-5">
        <Col lg={6} md={12}>
          <Image
            className="workshop-thumbnail mb-5"
            src={workshopStock1}
            alt="workshop Stock photo 1"
            fluid
          />
        </Col>
        <Col lg={6} md={12}>
          <h4 className="my-0 py-0">The Essentials Workshop</h4>
          <p>
            <i>Introducing the Annie Sloan Method</i>
          </p>
          This is a beginner/intermediate workshop taught by a certified Annie
          Sloan Chalk Paint instructor. You'll learn several hands-on-painting
          techniques, along with the proper application of waxes and gilding
          wax. Bring yourself (or a girlfriend or two), everything else is
          provided! By attending the workshop you'll also receive 15% off any
          paint or paint accessories you purchase the end of the class.
          <br />
          <br />
        </Col>
      </Row>

      <hr className="rounded my-5" />

      <Row>
        <Col lg={6} md={12}>
          <h4 className="my-0 py-0">Open Studio Workshop</h4>
          <p>
            <i>DIY Projects From Home</i>
          </p>
          Complete an entire piece during our workshop and learn techniques
          along the way! Bring your own small piece (small enough to fit in the
          passenger side of your car and you can easily carry like a small side
          table). Purchase your paint and wax at a 15% discount the day of the
          class, you may use our workshop brushes.
          <br />
          <br />
        </Col>

        <Col lg={6} md={12}>
          <Image
            className="workshop-thumbnail"
            src={workshopStock2}
            alt="workshop Stock photo 2"
            fluid
          />
        </Col>
      </Row>

      <hr className="rounded my-5" />

      <Row>
        <Col lg={6} md={12}>
          <Image
            className="workshop-thumbnail mb-5"
            src={workshopStock3}
            alt="workshop Stock photo 3"
            fluid
          />
        </Col>

        <Col lg={6} md={12}>
          <h4 className="my-0 py-0">Schedule A Workshop</h4>
          <p>
            <i>
              Email us at{" "}
              <a
                href="mailto:info@paintedbythebee.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@paintedbythebee.com
              </a>
              {""} along with the desired dates and the amount of guests in your
              party as pricing is per person.
              <br />
              <br />
              If you would like to schedule a private workshop outside of these
              dates, we can arrange that as well.
            </i>
          </p>

          <Row>
            <Table borderless>
              <thead>
                <tr>
                  <th colSpan="2">Essentials ($95)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saturday, Jul 10</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Aug 14</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Sept 4</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Table borderless>
              <thead>
                <tr>
                  <th colSpan="2">Open Studio($150)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saturday, Jul 24</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Aug 28</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
                <tr>
                  <td>Saturday, Sept 25</td>
                  <td>11:00am - 2:00pm</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>

      {/* <InlineWidget url="https://calendly.com/paintedbythebee/workshop" /> */}
    </Container>
  );
};
