import { Link } from "react-router-dom";
import "./css/ButtonBlue.css";

interface ButtonBlueProps {
  texte: string;
  link: string;
  onClick?: () => void;
}

function ButtonBlue({ texte, link, onClick }: ButtonBlueProps) {
  return (
    <Link to={link}>
      <button type="button" className="ButtonBlue" onClick={onClick}>
        {texte}
      </button>
    </Link>
  );
}
export default ButtonBlue;
