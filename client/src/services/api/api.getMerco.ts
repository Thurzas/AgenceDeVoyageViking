import { useEffect, useState } from "react";
import type { MercenairesProps } from "../../types/mercoProps";

export const getMercenaires = () => {
  const [mercenaires, setMercenaires] = useState<MercenairesProps[]>([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchMercenaires = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/mercenaires`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des Mercenaires");
        }
        const data = await response.json();
        setMercenaires(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des Mercenaires :",
          error,
        );
      }
    };
    fetchMercenaires();
  }, []);

  return {
    mercenaires,
  };
};
