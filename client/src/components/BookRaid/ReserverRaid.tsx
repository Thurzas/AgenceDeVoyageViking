import TitleLeft from "../ReserverRaid/TitleLeft";
import ImgRight from "../ReserverRaid/imgRight";
import "./ReserverRaid.css";
function ReserverRaid() {
  return (
    <div className="ReserverRaid">
      <div className="TextPersona">
        <h2>Personnaliser Votre Aventure</h2>
        <p>Vivez l'Excitation</p>
      </div>
      <div className="ImgTitleMidlePage">
        <ImgRight />
        <TitleLeft />
      </div>
    </div>
  );
}
export default ReserverRaid;
