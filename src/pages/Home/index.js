import React from "react";
import { Container, Image, Row, Table, Col, Figure } from "react-bootstrap";
import storefront from "./pxtb_storefront.jpg";
import "../../../src/App.css";
import stockistLogo from "./US_AS_Stockist-logo.jpg";
import workshopLogo from "./US_AS_Workshop-logo.jpg";
import { ChalkPaint } from "../../pages/ChalkPaint";
import { Workshops } from "../../pages/Workshops";

export const Home = () => {
  return (
    <Container>
      <Row className="main">
        <Col lg={8}>
          {/* <Image className="mainImg" src={storefront} alt="storefront" fluid /> */}
          Whether you’re planning on refreshing a small bedside table or
          transforming a whole room or kitchen, start your next project with
          Annie Sloan paints, waxes and accessories. Painted By The Bee is the
          home of Chalk Paint® in the Smyrna/Vinings area. Be sure to also ask
          about our workshops to learn techniques to help you get started.
          <p>
            <p />
            We have currently moved our paint inventory to{" "}
            <a
              className="links"
              href="https://www.google.com/maps/place/bobbie+sharma+(The+Treehouse)/@33.8437823,-84.4926701,17z/data=!3m1!4b1!4m5!3m4!1s0x88f510cf2d2e02c3:0xea2ff4940979a60b!8m2!3d33.8437846!4d-84.4904706"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b>Bobbie Sharma Boutique</b> starting April 12, 2022.
            </a>
          </p>
        </Col>

        <Col>
          <Row>
            <Table borderless>
              <thead>
                <tr>
                  <th colSpan="2">Store Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>12:00pm - 5:00pm</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>11:00am - 06:00pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>11:00am - 06:00pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>11:00am - 07:00pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>11:00am - 07:00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>11:00am - 07:00pm</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <a href="/chalk-paint" src={ChalkPaint}>
              <Figure className="as-logos2">
                <Figure.Image alt="Stockist Logo" src={stockistLogo} />
              </Figure>
            </a>
            <a href="/workshops" src={Workshops}>
              <Figure className="as-logos2">
                <Figure.Image alt="Workshop Logo" src={workshopLogo} />
              </Figure>
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
