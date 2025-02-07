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
        <div className="raidHistory">
          <h2>Pas de raid...</h2>
          <p>Allez ouste barbare ! il n'y pas de raid ici !</p>
        </div>
      </>
    );

  return (
    <>
      <NavBar />
      <div className="raidHistory">
        <li key={raid.id_raid} className="raid-item">
          <Raid raid={raid} destination={getPlace(raid.id_Lieu)[0]} />
        </li>
      </div>
    </>
  );
}

export default RaidDetail;
