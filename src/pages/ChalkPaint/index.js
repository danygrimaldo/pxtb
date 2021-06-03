import React from "react";
import { Container, Row } from "react-bootstrap";

// import { Container, Image, Row } from "react-bootstrap";
// import storefront from "./pxtb_storefront.jpg";
import "../../../src/App.css";
import Swatches from "../../components/swatches";

export const ChalkPaint = () => {
  return (
    <Container>
      {/* <Image src={storefront} alt="Painted By The Bee storefront" fluid /> */}
      <Row>
        <Swatches />
      </Row>
    </Container>
  );
};
