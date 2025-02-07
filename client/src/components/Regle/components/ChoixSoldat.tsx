import "./ChoixSoldat.css";
import SoldatChoose1 from "../../../assets/images/SoldatChoose1.svg";
import SoldatChoose2 from "../../../assets/images/SoldatChoose2.svg";
import SoldatChoose3 from "../../../assets/images/SoldatChoose3.svg";
function ChoixSoldat() {
  return (
    <div className="Contenair-Soldat">
      <h1>Votre exploration,Vos regles.</h1>
      <div className="SoldatCompo">
        <img src={SoldatChoose1} alt="Soldat" />
        <div>
          <h2>Choisiser vos soldats</h2>
          <p>Parmis notre large choix de guerrier aguerri</p>
        </div>
      </div>
      <div className="SoldatCompo">
        <img src={SoldatChoose2} alt="soldat2" />
        <div>
          <h2>Choisisez vos soldat</h2>
          <p>Parmis notre large choix de guerrier aguerri</p>
        </div>
      </div>
      <div className="SoldatCompo">
        <img src={SoldatChoose3} alt="soldat3" />
        <div>
          <h2>Choisisez vos soldat</h2>
          <p>Parmis notre large choix de guerrier aguerri</p>
        </div>
      </div>
    </div>
  );
}
export default ChoixSoldat;
