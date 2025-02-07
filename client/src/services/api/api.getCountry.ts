import { useEffect, useState } from "react";
import type { countryProps } from "../../types/countryInterface";

export const getCountry = () => {
  const [country, setCountry] = useState<countryProps[]>([]);

  const apiUrl = process.env.VITE_API_URL;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/pays`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des pays");
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
      }
    };
    fetchCountry();
  }, [apiUrl]);

  return {
    country,
  };
};
