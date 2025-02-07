import { useEffect, useState } from "react";
import ButtonBlue from "../components/Button/ButtonBlue";
import NewRaidNavBar from "../components/RaidCreation/NewRaidNavBar";
import "./css/CreatNewRaid_Recap.css";

interface RaidData {
  selectedCountry: string;
  selectedTerrain: string;
  terrainDetails?: {
    id: string;
    name: string;
    difficulty: string;
    reward: string;
  };
  chefDetails?: {
    name: string;
    price: number;
    army: number;
    army_price: number;
  };
  assuranceDetails?: {
    name: string;
    cost: number;
  };
  shipDetails?: {
    name: string;
    cost: number;
    capacity: number;
  };
  weaponDetails?: {
    material: string;
    cost_per_soldier: number;
  };
}

function NewRaidRecap() {
  const [raidData, setRaidData] = useState<RaidData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("currentRaid");
    if (data) {
      setRaidData(JSON.parse(data));
    }
  }, []);

  const calculateTotalCost = () => {
    if (!raidData) return 0;

    let total = 0;

    // Coût du chef et de son armée
    if (raidData.chefDetails) {
      total += raidData.chefDetails.price; // Coût du chef
      total += raidData.chefDetails.army_price; // Coût de l'armée
    }

    // Coût de l'assurance
    if (raidData.assuranceDetails) {
      total += raidData.assuranceDetails.cost;
    }

    // Coût du navire
    if (raidData.shipDetails) {
      total += raidData.shipDetails.cost;
    }

    // Coût des armes (par soldat)
    if (raidData.weaponDetails && raidData.chefDetails) {
      total +=
        raidData.weaponDetails.cost_per_soldier * raidData.chefDetails.army;
    }

    return total;
  };

  return (
    <div className="newRaid-Recap-page">
      <NewRaidNavBar link={"/new_raid_insurance"} />
      <div>
        <h1 className="recap-title">Récapitulatif du Raid</h1>

        {raidData && (
          <div className="recap-details">
            {raidData.terrainDetails && (
              <div className="raid-details">
                <div>
                  <h1>Terrain de raid</h1>
                  <h2>{raidData.terrainDetails.name}</h2>
                </div>
              </div>
            )}

            {raidData.chefDetails && (
              <div className="raid-details">
                <div>
                  <h1>Chef de raid</h1>
                  <h2>{raidData.chefDetails.name}</h2>
                </div>
                <div className="h2-price-recap">
                  <h2>{raidData.chefDetails.price} Pieces</h2>
                </div>
              </div>
            )}
            {raidData.shipDetails && (
              <div className="raid-details">
                <div>
                  <h1>Navire</h1>
                  <h2>{raidData.shipDetails.name}</h2>
                </div>
                <div className="h2-price-recap">
                  <h2>{raidData.shipDetails.cost} Pieces</h2>
                </div>
              </div>
            )}

            {raidData.weaponDetails && (
              <div className="raid-details">
                <div>
                  <h1>Materiaux des armes</h1>
                  <h2>{raidData.weaponDetails.material}</h2>
                  <h2>
                    {raidData.weaponDetails.cost_per_soldier} Pieces par arme
                  </h2>
                </div>
                <div className="h2-price-recap">
                  {raidData.chefDetails && (
                    <h2>
                      Total :{" "}
                      {raidData.weaponDetails.cost_per_soldier *
                        raidData.chefDetails.army}{" "}
                      Pieces
                    </h2>
                  )}
                </div>
              </div>
            )}
            {raidData.assuranceDetails && (
              <div className="raid-details">
                <div>
                  <h1>Assurance</h1>
                  <h2>{raidData.assuranceDetails.name}</h2>
                </div>
                <div className="h2-price-recap">
                  <h2>{raidData.assuranceDetails.cost} Pieces</h2>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="total-cost">
        <div className="total-cost-text">
          <h1>Coût Total du Raid</h1>
          <h1 className="total-raid-price">{calculateTotalCost()} Pieces</h1>
        </div>
        <ButtonBlue texte="Confirmer le raid" link={"/"} />
      </div>
    </div>
  );
}

export default NewRaidRecap;
