import ButtonBlue from "../components/Button/ButtonBlue";
import NewRaidOptionAssurances from "../components/RaidCreation/NewRaidChoiseAssurances";
import NewRaidNavBar from "../components/RaidCreation/NewRaidNavBar";
import NewRaidTitle from "../components/RaidCreation/newRaidPageTitle";

import "./css/CreatNewRaid_03.css";

function NewRaidAssurance() {
  return (
    <div className="newRaid-Assurance-page">
      <NewRaidNavBar link={"/new_raid_option"} />
      <NewRaidTitle isInsurrance={true} />
      <NewRaidOptionAssurances
        itemChoice="vos assurances"
        setChoiceType="assurances"
      />
      <div className="button-container-raidCreation">
        <ButtonBlue texte="Etape suivante" link={"/new_raid_recap"} />
      </div>
    </div>
  );
}

export default NewRaidAssurance;
