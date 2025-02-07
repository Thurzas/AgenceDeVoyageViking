import { useEffect, useState } from "react";
import type { RaidProps } from "../../types/raidProps";

export const getRaids = () => {
  const [raids, setRaids] = useState<RaidProps[]>([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchRaids = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/raids`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des raids");
        }
        const data = await response.json();
        setRaids(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des raids :", error);
      }
    };
    fetchRaids();
  }, []);

  return {
    raids,
  };
};
