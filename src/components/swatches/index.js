import React, { Row } from "react-bootstrap";
import { Component } from "react";
import SwatchCard from "../SwatchCard";

import amsterdamGreen from "./Images/Amsterdam-Green.jpg";
import antibesGreen from "./Images/Antibes-Green.jpg";
import antoinette from "./Images/Antoinette.jpg";
import arles from "./Images/Arles.jpg";
import athenianBlack from "./Images/Athenian-Black.jpg";
import aubussonBlue from "./Images/Aubusson-Blue.jpg";
import barcelonaOrange from "./Images/Barcelona-Orange.jpg";
import burgundy from "./Images/Burgundy.jpg";
import capriPink from "./Images/Capri-Pink.jpg";
import chateauGrey from "./Images/Chateau-Grey.jpg";
import chicagoGrey from "./Images/Chicago-Grey.jpg";
import coco from "./Images/Coco.jpg";
import countryGrey from "./Images/Country-Grey.jpg";
import cream from "./Images/Cream.jpg";
import duckEggBlue from "./Images/Duck-Egg-Blue.jpg";
import emile from "./Images/Emile.jpg";
import emperorsSilk from "./Images/Emperors-Silk.jpg";
import englishYellow from "./Images/English-Yellow.jpg";
import firle from "./Images/Firle.jpg";
import florence from "./Images/Florence.jpg";
import frenchLinen from "./Images/French-Linen.jpg";
import giverny from "./Images/Giverny.jpg";
import graphite from "./Images/Graphite.jpg";
import greekBlue from "./Images/Greek-Blue.jpg";
import henrietta from "./Images/Henrietta.jpg";
import honfleur from "./Images/Honfleur.jpg";
import lemLem from "./Images/Lem-Lem.jpg";
import louisBlue from "./Images/Louis-Blue.jpg";
import napoleonicBlue from "./Images/Napoleonic-Blue.jpg";
import oldOchre from "./Images/Old-Ochre.jpg";
import oldViolet from "./Images/Old-Violet.jpg";
import oldWhite from "./Images/Old-White.jpg";
import olive from "./Images/Olive.jpg";
import original from "./Images/Original.jpg";
import oxfordNavy from "./Images/Oxford-Navy.jpg";
import paloma from "./Images/Paloma.jpg";
import parisGrey from "./Images/Paris-Grey.jpg";
import primerRed from "./Images/Primer-Red.jpg";
import provence from "./Images/Provence.jpg";
import pure from "./Images/Pure.jpg";
import rodmell from "./Images/Rodmell.jpg";
import scandinavianPink from "./Images/Scandinavian-Pink.jpg";
import svenskaBlue from "./Images/Svenska-Blue.jpg";
import tilton from "./Images/Tilton.jpg";
import versailles from "./Images/Versailles.jpg";

export const swatches = [
  {
    id: 1,
    name: "Amsterdam Green",
    image: amsterdamGreen,
    alt: "Amsterdam Green",
  },
  {
    id: 2,
    name: "Antibes Green",
    image: antibesGreen,
    alt: "Antibes Green",
  },
  {
    id: 3,
    name: "Antoinette",
    image: antoinette,
    alt: "Antoinette",
  },
  {
    id: 4,
    name: "Arles",
    image: arles,
    alt: "Arles",
  },
  {
    id: 5,
    name: "Athenian Black",
    image: athenianBlack,
    alt: "Athenian Black",
  },
  {
    id: 6,
    name: "Aubusson Blue",
    image: aubussonBlue,
    alt: "Aubusson Blue",
  },
  {
    id: 7,
    name: "Barcelona Orange",
    image: barcelonaOrange,
    alt: "Barcelona Orange",
  },
  {
    id: 8,
    name: "Burgundy",
    image: burgundy,
    alt: "Burgundy",
  },
  {
    id: 9,
    name: "Capri Pink",
    image: capriPink,
    alt: "Capri Pink",
  },
  {
    id: 10,
    name: "Chateau Grey",
    image: chateauGrey,
    alt: "Chateau Grey",
  },
  {
    id: 11,
    name: "Chicago Grey",
    image: chicagoGrey,
    alt: "Chicago Grey",
  },
  {
    id: 12,
    name: "Coco",
    image: coco,
    alt: "Coco",
  },
  {
    id: 13,
    name: "Country Grey",
    image: countryGrey,
    alt: "Country Grey",
  },
  {
    id: 14,
    name: "Cream",
    image: cream,
    alt: "Cream",
  },
  {
    id: 15,
    name: "Duck Egg Blue",
    image: duckEggBlue,
    alt: "Duck Egg Blue",
  },
  {
    id: 16,
    name: "Emile",
    image: emile,
    alt: "Emile",
  },
  {
    id: 17,
    name: "Emperors Silk",
    image: emperorsSilk,
    alt: "Emperors Silk",
  },
  {
    id: 18,
    name: "English-Yellow",
    image: englishYellow,
    alt: "English-Yellow",
  },
  {
    id: 19,
    name: "Firle",
    image: firle,
    alt: "Firle",
  },
  {
    id: 20,
    name: "Florence",
    image: florence,
    alt: "Florence",
  },
  {
    id: 21,
    name: "French-Linen",
    image: frenchLinen,
    alt: "French-Linen",
  },
  {
    id: 22,
    name: "Giverny",
    image: giverny,
    alt: "Giverny",
  },
  {
    id: 23,
    name: "Graphite",
    image: graphite,
    alt: "Graphite",
  },
  {
    id: 24,
    name: "Greek Blue",
    image: greekBlue,
    alt: "Greek Blue",
  },
  {
    id: 25,
    name: "Henrietta",
    image: henrietta,
    alt: "Henrietta",
  },
  {
    id: 26,
    name: "Honfleur",
    image: honfleur,
    alt: "Honfleur",
  },
  {
    id: 27,
    name: "Lem-Lem",
    image: lemLem,
    alt: "Lem-Lem",
  },
  {
    id: 28,
    name: "Louis Blue",
    image: louisBlue,
    alt: "Louis Blue",
  },
  {
    id: 29,
    name: "Napoleonic Blue",
    image: napoleonicBlue,
    alt: "Napoleonic Blue",
  },
  {
    id: 30,
    name: "Old Ochre",
    image: oldOchre,
    alt: "Old Ochre",
  },
  {
    id: 31,
    name: "Old Violet",
    image: oldViolet,
    alt: "Old Violet",
  },
  {
    id: 32,
    name: "Old White",
    image: oldWhite,
    alt: "Old White",
  },
  {
    id: 33,
    name: "Olive",
    image: olive,
    alt: "Olive",
  },
  {
    id: 35,
    name: "Original",
    image: original,
    alt: "Original",
  },
  {
    id: 36,
    name: "Oxford Navy",
    image: oxfordNavy,
    alt: "Oxford Navy",
  },
  {
    id: 37,
    name: "Paloma",
    image: paloma,
    alt: "Paloma",
  },
  {
    id: 38,
    name: "Paris Grey",
    image: parisGrey,
    alt: "Paris Grey",
  },
  {
    id: 39,
    name: "Primer Red",
    image: primerRed,
    alt: "Primer Red",
  },
  {
    id: 40,
    name: "Provence",
    image: provence,
    alt: "Provence",
  },
  {
    id: 41,
    name: "Pure",
    image: pure,
    alt: "Pure",
  },
  {
    id: 42,
    name: "Rodmell",
    image: rodmell,
    alt: "Rodmell",
  },
  {
    id: 43,
    name: "Scandinavian Pink",
    image: scandinavianPink,
    alt: "Scandinavian Pink",
  },
  {
    id: 44,
    name: "Svenska Blue",
    image: svenskaBlue,
    alt: "Svenska Blue",
  },
  {
    id: 45,
    name: "Tilton",
    image: tilton,
    alt: "Tilton",
  },
  {
    id: 46,
    name: "Versailles",
    image: versailles,
    alt: "Versailles",
  },
];

class Swatches extends Component {
  // Setting this.state.swatches to the swatches json array
  state = {
    swatches,
  };

  render() {
    return (
      <Row>
        {this.state.swatches.map((swatch) => (
          <SwatchCard
            id={swatch.id}
            key={swatch.id}
            name={swatch.name}
            image={swatch.image}
            alt={swatch.alt}
          />
        ))}
      </Row>
    );
  }
}

export default Swatches;
