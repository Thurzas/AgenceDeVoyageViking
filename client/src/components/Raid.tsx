import type { DestinationProps } from "../types/destinationProps";
import type { RaidProps } from "../types/raidProps";

function Raid({
  raid,
  destination,
}: { raid: RaidProps; destination?: DestinationProps }) {
  return (
    <div className="">
      {destination && <h2>{destination.nom_destination}</h2>}
      <p>{raid.description}</p>
      <p>Difficulté : {raid.difficulté}</p>
      <p>Gains : {raid.gain}</p>
      <p>Rendez vous le : {raid.date.toString()}</p>
    </div>
  );
}

export default Raid;
