import React from "react";
import { Figure } from "react-bootstrap";

function ImageCard(props) {
  return (
    <Figure className="image-cards">
      <Figure.Image width={100} src={props.image} alt={props.name} />
      <Figure.Caption>
        <strong>{props.name}</strong>
        <div className="prices mt-3">
          <i>1 Litre: $37.95</i>
          <br />
          <i>Sample: $12.95</i>
        </div>
      </Figure.Caption>
    </Figure>
  );
}

export default ImageCard;
