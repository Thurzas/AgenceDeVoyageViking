import { getRaids } from "../services/api/api.getRaids";
import "./css/raidHistory.css";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Raid from "../components/Raid";
import { getDestinations } from "../services/api/api.getDestinations";
import type { RaidProps } from "../types/raidProps";

function RaidDetail() {
  const { id } = useParams();
  if (!id) return;

  const raids = getRaids().raids;
  const destinations = getDestinations().destinations;

  const getPlace = (id: number) => {
    const destination = destinations.filter(
      (destination) => destination.id_Lieu === id,
    );
    return destination;
  };

  const raid = raids.find(
    (item: RaidProps) => item.id_raid === Number.parseInt(id),
  );

  if (!raid)
    return (
      <>
        <NavBar />
        <svg width="0" height="0">
          <title id="filterTitle">Effet de papier froissé avec ombre</title>
          <filter id="crumpledPaper">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="8"
            />
            <feComponentTransfer in="turbulence" result="grayNoise">
              <feFuncR type="linear" slope="0.3" intercept="0.4" />
              <feFuncG type="linear" slope="0.3" intercept="0.4" />
              <feFuncB type="linear" slope="0.3" intercept="0.4" />
            </feComponentTransfer>
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>
        </svg>
        <div className="questPanel">
          <div className="liegePart">
            <hr color="black" />
            <br />
            <ul>
              <li>
                <h2>ce raid n'éxiste pas...</h2>
                <p>Allez ouste barbare ! il n'y pas de raid ici !</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );

  return (
    <>
      <NavBar />
      <svg width="0" height="0">
        <title id="filterTitle">Effet de papier froissé avec ombre</title>
        <filter id="crumpledPaper">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="8"
          />
          <feComponentTransfer in="turbulence" result="grayNoise">
            <feFuncR type="linear" slope="0.3" intercept="0.4" />
            <feFuncG type="linear" slope="0.3" intercept="0.4" />
            <feFuncB type="linear" slope="0.3" intercept="0.4" />
          </feComponentTransfer>
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
      <div className="questPanel">
        <div className="liegePart">
          <hr color="black" />
          <br />
          <ul>
            <li className="raid-item questComponent">
              <Raid raid={raid} destination={getPlace(raid.id_Lieu)[0]} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RaidDetail;
