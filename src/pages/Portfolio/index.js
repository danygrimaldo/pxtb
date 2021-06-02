import React from "react";
import { Container, Carousel } from "react-bootstrap";
import featured1 from "./Craggy_Kitchen1.png";
import featured2 from "./Craggy_Kitchen2.png";
import featured3 from "./Craggy_Kitchen3.png";

export const Portfolio = () => {
  return (
    <Container>
      <Carousel fade>
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
      <h1> Featured Project </h1>
      <div className="pt-2">
        Complete an entire piece during our workshop and learn techniques along
        the way! Bring your own small piece (small enough to fit in the
        passenger side of your car and you can easily carry like a small side
        table). Purchase your paint and wax at a 15% discount the day of the
        class, you may use our workshop brushes.
      </div>
    </Container>
  );
};
