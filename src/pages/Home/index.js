import React from "react";
import { Container, Image, Row, Table, Col, Figure } from "react-bootstrap";
import storefront from "./pxtb_storefront.jpg";
import "../../../src/App.css";
import { First, Last } from "react-bootstrap/esm/PageItem";
import stockistLogo from "./US_AS_Stockist-logo.jpg";
import workshopLogo from "./US_AS_Workshop-logo.jpg";
import { ChalkPaint } from "../../pages/ChalkPaint";
import { Workshops } from "../../pages/Workshops";

// import Swatches from "../../components/swatches";

export const Home = () => {
  return (
    //ORIGINAL LAYOUT

    // <Container>
    //   <Image src={storefront} alt="Painted By The Bee storefront" fluid />

    //   <Row className="main">
    //     <Col lg={{ order: First }} className="mt-3 mb-5">
    //       Whether you’re planning on refreshing a small bedside table or
    //       transforming a whole room or kitchen, start your next project with
    //       Annie Sloan paints, waxes and accessories. Painted By The Bee is the
    //       home of Chalk Paint® in the Smyrna/Vinings area. Be sure to also ask
    //       about our workshops to learn techniques to help you get started.
    //     </Col>
    //     <Col lg={{ order: Last }}>
    //       <Table borderless>
    //         <thead>
    //           <tr>
    //             <th colSpan="2">Store Hours</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>Sunday</td>
    //             <td>Closed</td>
    //           </tr>
    //           <tr>
    //             <td>Monday</td>
    //             <td>Closed</td>
    //           </tr>
    //           <tr>
    //             <td>Wednesday</td>
    //             <td>11:00am - 05:30pm</td>
    //           </tr>
    //           <tr>
    //             <td>Thursday</td>
    //             <td>11:00am - 05:30pm</td>
    //           </tr>
    //           <tr>
    //             <td>Friday</td>
    //             <td>11:00am - 05:30pm</td>
    //           </tr>
    //           <tr>
    //             <td>Saturday</td>
    //             <td>11:00am - 04:00pm</td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //     </Col>
    //   </Row>
    // </Container>

    //NEW LAYOUT

    <Container>
      <Row className="main">
        <Col>
          <Row>
            <Image
              className="mainImg"
              src={storefront}
              alt="Painted By The Bee storefront"
              fluid
              rounded
            />
          </Row>
        </Col>

        <Col lg={{ order: First }} className="mt-3 mb-3">
          Whether you’re planning on refreshing a small bedside table or
          transforming a whole room or kitchen, start your next project with
          Annie Sloan paints, waxes and accessories. Painted By The Bee is the
          home of Chalk Paint® in the Smyrna/Vinings area. Be sure to also ask
          about our workshops to learn techniques to help you get started.
          <Row>
            <Table lg={{ order: Last }} className="mt-3 mb-5" borderless>
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
                  <td>Wednesday</td>
                  <td>11:00am - 05:30pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>11:00am - 05:30pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>11:00am - 05:30pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>11:00am - 04:00pm</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <Row>
        <a href="/chalk-paint" src={ChalkPaint}>
          <Figure>
            <Figure.Image
              className="as-logos2"
              alt="Stockist Logo"
              src={stockistLogo}
            />
          </Figure>
        </a>
        <a href="/workshops" src={Workshops}>
          <Figure>
            <Figure.Image
              className="as-logos2"
              alt="Workshop Logo"
              src={workshopLogo}
            />
          </Figure>
        </a>
      </Row>
    </Container>
  );
};
