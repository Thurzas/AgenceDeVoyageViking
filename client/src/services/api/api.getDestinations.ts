import { useEffect, useState } from "react";
import type { DestinationProps } from "../../types/destinationProps";

export const getDestinations = () => {
  const [destinations, setDestinations] = useState<DestinationProps[]>([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/Destinations`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des destinations");
        }
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des destinations :",
          error,
        );
      }
    };
    fetchDestinations();
  }, []);

  return {
    destinations,
  };
};
