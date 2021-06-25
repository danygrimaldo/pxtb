import React from "react";
import { Container, Carousel } from "react-bootstrap";
import featured1 from "./Images/Craggy_Kitchen1.png";
import featured2 from "./Images/Craggy_Kitchen2.png";
import featured3 from "./Images/Craggy_Kitchen3.png";
import Gallery from "../../components/gallery";

export const Portfolio = () => {
  return (
    <Container>
      <Carousel fade interval="2500">
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={featured1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={featured2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={featured3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1> Revitalize Your Kitchen </h1>
      <div className="pt-2">
        Ask us about our kitchen painting services! We have changed the way
        guests view kitchens simply by changing colors, hardware, and sometimes
        texture. We welcome projects big or small. Send us an email at
        info@paintedbythebee to request your quote today. You will be happy you
        did.
      </div>
      <Gallery />
    </Container>
  );
};
