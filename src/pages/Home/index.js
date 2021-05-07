import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import storefront from "./pxtb_storefront.jpg";
import "../../../src/App.css";

export const Home = () => {
  return (
    <Container>
      <Image src={storefront} alt="Painted By The Bee storefront" fluid />
      <Row className="main">
        Whether you’re planning on refreshing a small bedside table or
        transforming a whole room or kitchen, start your next project with Annie
        Sloan paints, waxes and accessories. Painted By The Bee is the home of
        Chalk Paint® in the Smyrna/Vinings area. Be sure to also ask about our
        workshops to learn techniques to help you get started.
      </Row>
    </Container>
  );
};
