import { getRaids } from "../services/api/api.getRaids";
import "./css/raidHistory.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Raid from "../components/Raid";
import { getDestinations } from "../services/api/api.getDestinations";
function RaidHistory() {
  const raids = getRaids();
  const destinations = getDestinations().destinations;

  const getPlace = (id: number) => {
    const destination = destinations.filter(
      (destination) => destination.id_Lieu === id,
    );
    return destination;
  };

  return (
    <>
      <NavBar />
      <div className="questPanel">
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
        <div className="liegePart">
          <hr color="black" />
          <br />
          <ul>
            {raids?.raids ? (
              raids.raids.map((raid) => (
                <li key={raid.id_raid} className="raid-item questComponent">
                  <Link to={`/history/${raid.id_raid}`}>
                    <Raid raid={raid} destination={getPlace(raid.id_Lieu)[0]} />
                  </Link>
                </li>
              ))
            ) : (
              <li className="raid-item questComponent">
                <p>Pas de raids en cours...</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RaidHistory;
