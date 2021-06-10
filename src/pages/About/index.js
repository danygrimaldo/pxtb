import React from "react";
import { Container, Col, Row, Figure } from "react-bootstrap";
import bioPic from "./images/lede_social.jpg";
import "../../../src/App.css";

export const About = () => {
  return (
    <Container>
      <h1 className="about-me-header"> MEET AMERICA</h1>

      <Row>
        <Col>
          <Figure>
            <Figure.Image
              className="bioImg"
              alt="America Profile Picture"
              src={bioPic}
            />
          </Figure>
        </Col>

        <Col className="main pt-4">
          <strong>BACKGROUND</strong>
          <p>
            As a native to the City of Smyrna, America loves working with the
            community to teach, assist, and take on projects that everyone can
            enjoy. As a local high school student, she always knew that she
            wanted to explore her creative talents for a living.
            <br />
            <br />
            In 2010, she married her highschool sweetheart, Dany
            <i> {"(graphic designer)"},</i> and started working as an assistant
            for her mentor Lisa Kabus. America's work ethic, creativity, and
            inspiration is greatly influenced by her.
          </p>
          <br />
          <strong>THE STORY</strong>
          <p>
            America originally started working with The Bird and The Bee as a
            part-time employee in 2015. As she gained confidence with working
            Annie Sloan Chalk Paint® and her techniques, painting quickly became
            her passion. When the shop announced that it was shutting down,
            America quickly took advantage of the opportunity to take over
            instead. Thus, the family owned business,{" "}
            <i>
              <b>Painted By The Bee</b>
            </i>{" "}
            was born!
            <br />
            <br />
            As a proud supporter of small local businesses all across the globe,
            Annie Sloan has been a great value to what we provide to the
            community. We are proud stockists, and looking to deliver 100%
            effort, 100% of the time.
          </p>
          <br />
        </Col>
      </Row>
    </Container>
  );
};
