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
      <div className="raidHistory">
        {raids?.raids ? (
          raids.raids.map((raid) => (
            <li key={raid.id_raid} className="raid-item">
              <Link to={`/history/${raid.id_raid}`}>
                <Raid raid={raid} destination={getPlace(raid.id_Lieu)[0]} />
              </Link>
            </li>
          ))
        ) : (
          <li>il n'y a pas de raids, il n'y en a jamais eu.</li>
        )}
      </div>
    </>
  );
}

export default RaidHistory;
