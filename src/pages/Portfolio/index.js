import React from "react";
import { Container, Carousel, Row, Image } from "react-bootstrap";
import featured1 from "./Images/Craggy_Kitchen1.png";
import featured2 from "./Images/Craggy_Kitchen2.png";
import featured3 from "./Images/Craggy_Kitchen3.png";
import img001 from "./Images/cabinet001.jpeg";
import img002 from "./Images/cabinet002.jpeg";
import img003 from "./Images/cabinet003.jpeg";
import img004 from "./Images/chairs001.jpeg";
import img005 from "./Images/chairs002.jpeg";
import img006 from "./Images/chairs003.jpeg";
import img007 from "./Images/desk001.jpeg";
import img008 from "./Images/desk002.jpeg";
import img009 from "./Images/dresser001.jpeg";
import img010 from "./Images/dresser002.jpeg";
import img011 from "./Images/dresser003.jpeg";
import img012 from "./Images/dresser004.jpeg";
import img013 from "./Images/tile001.jpeg";
import img014 from "./Images/frames001.jpeg";
import img015 from "./Images/frames002.jpeg";
import img016 from "./Images/kitchen001.jpeg";
import img017 from "./Images/lamps001.jpeg";
import img018 from "./Images/mantle001.jpeg";
import img019 from "./Images/mantle002.jpeg";
import img020 from "./Images/mantle003.jpeg";
import img021 from "./Images/mantle004.jpeg";
import img022 from "./Images/misc001.jpeg";
import img023 from "./Images/misc002.jpeg";
import img024 from "./Images/misc009.jpeg";
import img025 from "./Images/misc003.jpeg";
import img026 from "./Images/misc004.jpeg";
import img027 from "./Images/misc005.jpeg";
import img028 from "./Images/misc007.jpeg";
import img029 from "./Images/misc008.jpeg";
import img030 from "./Images/secretary001.jpeg";

export const Portfolio = () => {
  return (
    <Container>
      <h1> Revitalize Your Kitchen </h1>
      <div className="pt-2">
        Ask us about our kitchen painting services! We have changed the way
        guests view kitchens simply by changing colors, hardware, and sometimes
        texture. We welcome projects big or small. Send us an email at{" "}
        <a href="mailto:info@paintedbythebee.com">info@paintedbythebee.com</a>{" "}
        to request your quote today. You will be happy you did.
      </div>

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
      <h1 className="my-8"> Project Gallery </h1>

      <Row className="gallery">
        <Image className="thumbs" src={img001} alt="white glass dresser" />
        <Image className="thumbs" src={img002} alt="bathroom sink dresser" />
        <Image className="thumbs" src={img003} alt="graphite dining dresser" />
        <Image className="thumbs" src={img004} alt="green chairs" />
        <Image className="thumbs" src={img005} alt="grey chair" />
        <Image className="thumbs" src={img006} alt="fabric chair" />
        <Image className="thumbs" src={img007} alt="white desk" />
        <Image className="thumbs" src={img008} alt="brown desk" />
        <Image className="thumbs" src={img009} alt="white dresser" />
        <Image className="thumbs" src={img010} alt="white wash dresser1" />
        <Image className="thumbs" src={img011} alt="white wash dresser2" />
        <Image className="thumbs" src={img012} alt="white wash dresser3" />
        <Image className="thumbs" src={img013} alt="tile stencil" />
        <Image className="thumbs" src={img014} alt="grey mirror frame" />
        <Image className="thumbs" src={img015} alt="golden mirror frame" />
        <Image className="thumbs" src={img016} alt="White Kitchen Cabinets" />
        <Image className="thumbs" src={img017} alt="White Lamp" />
        <Image className="thumbs" src={img018} alt="White chimney mantle" />
        <Image className="thumbs" src={img019} alt="brown brick chimney1" />
        <Image className="thumbs" src={img020} alt="brown brick chimney2" />
        <Image className="thumbs" src={img021} alt="brown brick chimney3" />
        <Image className="thumbs" src={img022} alt="white shelf piece" />
        <Image className="thumbs" src={img023} alt="brown shelf piece1" />
        <Image className="thumbs" src={img024} alt="brown shelf piece2" />
        <Image className="thumbs" src={img025} alt="brown night stand1" />
        <Image className="thumbs" src={img026} alt="brown night stand2" />
        <Image className="thumbs" src={img027} alt="brown night stand3" />
        <Image className="thumbs" src={img028} alt="white dresser stand2" />
        <Image className="thumbs" src={img029} alt="black table stand" />
        <Image className="thumbs" src={img030} alt="french linen secretary" />
      </Row>
    </Container>
  );
};
