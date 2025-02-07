import "./css/raidHistory.css";
import { useParams } from "react-router-dom";
import Mercenaire from "../components/Mercenaire";
import NavBar from "../components/NavBar/NavBar";
import { getMercenaires } from "../services/api/api.getMerco";
import type { MercenairesProps } from "../types/mercoProps";

function MercoDetail() {
  const { id } = useParams();
  if (!id) return;

  const Mercenaires = getMercenaires().mercenaires;

  const merco = Mercenaires.find(
    (item: MercenairesProps) => item.id_mercenaire === Number.parseInt(id),
  );

  if (!merco)
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
                <h2>ce mercenaire n'éxiste pas...</h2>
                <p>Allez ouste barbare ! il n'y pas de mercenaire ici !</p>
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
            <li className="mercenaire-item questComponent">
              <Mercenaire data={merco} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MercoDetail;
