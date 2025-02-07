import "./css/raidHistory.css";
import { Link } from "react-router-dom";
import Mercenaire from "../components/Mercenaire";
import NavBar from "../components/NavBar/NavBar";
import { getMercenaires } from "../services/api/api.getMerco";
function MercoHistory() {
  const mercenaires = getMercenaires().mercenaires;

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
            {mercenaires ? (
              mercenaires.map((mercenaire) => (
                <li
                  key={mercenaire.id_mercenaire}
                  className="raid-item questComponent"
                >
                  <Link to={`/mercenaires/${mercenaire.id_mercenaire}`}>
                    <Mercenaire data={mercenaire} />
                  </Link>
                </li>
              ))
            ) : (
              <li className="raid-item questComponent">
                <p>Pas de mercenaires.... c'est la crise !</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MercoHistory;
