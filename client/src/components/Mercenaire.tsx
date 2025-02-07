import type { MercenairesProps } from "../types/mercoProps";

function Mercenaire({ data }: { data: MercenairesProps }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="">
      <img
        src={`${apiUrl}/api/images/${data.portrait}`}
        crossOrigin="anonymous"
        alt="le gros viking !"
      />

      <h2>{data.nom_mercenaire}</h2>
      <p> age: {data.age}</p>
      <p> force: {data.strength}</p>
      <p> intelligence : {data.intelligence}</p>
      <p> agilité: {data.agilité}</p>
      <p> prix: {data.cout}</p>
    </div>
  );
}

export default Mercenaire;
