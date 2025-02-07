import { useEffect, useState } from "react";
import "./css/newRaidPageTitle.css";

interface TitleProps {
  isInsurrance: boolean;
}

function NewRaidTitle({ isInsurrance }: TitleProps) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const raidData = localStorage.getItem("currentRaid");
    if (raidData !== null) {
      const currentRaid = JSON.parse(raidData);
      setSelectedCountry(currentRaid.selectedCountry);
    }
  }, []);

  return (
    <>
      {isInsurrance ? (
        <h2 className="page-title-container">
          Choisez les options d'assurance que vous souhaitez :
        </h2>
      ) : (
        <h2 className="page-title-container">
          Voici les options pour un raid{" "}
          {selectedCountry !== "Danemark" ? "en" : "au"} {selectedCountry}
        </h2>
      )}
    </>
  );
}

export default NewRaidTitle;
