import ButtonBlue from "../components/Button/ButtonBlue";
import NewRaidOptionContainer from "../components/RaidCreation/NewRaidChoiceContainer";
import NewRaidNavBar from "../components/RaidCreation/NewRaidNavBar";
import NewRaidTitle from "../components/RaidCreation/newRaidPageTitle";
import "./css/CreatNewRaid_02.css";

function NewRaidOptions() {
  return (
    <div className="NewRaidOptionspage">
      <NewRaidNavBar link={"/new-raid"} />
      <NewRaidTitle isInsurrance={false} />
      <NewRaidOptionContainer />
      <div className="button-container-raidCreation">
        <ButtonBlue texte="Etape suivante" link={"/new_raid_insurance"} />
      </div>
    </div>
  );
}

export default NewRaidOptions;
