import React from "react";
import { Container, Image, Row, Table, Col } from "react-bootstrap";
import storefront from "./pxtb_storefront.jpg";
import "../../../src/App.css";

export const Home = () => {
  return (
    <Container>
      <Image src={storefront} alt="Painted By The Bee storefront" fluid />
      <Row className="main">
        <Col sm={{ order: 1 }}>
          Whether you’re planning on refreshing a small bedside table or
          transforming a whole room or kitchen, start your next project with
          Annie Sloan paints, waxes and accessories. Painted By The Bee is the
          home of Chalk Paint® in the Smyrna/Vinings area. Be sure to also ask
          about our workshops to learn techniques to help you get started.
        </Col>
        <Col>
          <Table className="storeHours" sm={{ order: "last" }} responsive>
            <thead>
              <tr>
                <th colSpan="2">Store Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>11:00am - 5:30pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>11:00am - 5:30pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>11:00am - 5:30pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>11:00am - 5:30pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>11:00am - 4:00pm</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
