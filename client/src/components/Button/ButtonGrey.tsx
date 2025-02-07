import { Link } from "react-router-dom";
import "./css/ButtonGrey.css";

interface ButtonBlueProps {
  texte: string;
  link: string;
  onClick?: () => void;
}

function ButtonGrey({ texte, link, onClick }: ButtonBlueProps) {
  return (
    <Link to={link}>
      <button type="button" className="ButtonGrey" onClick={onClick}>
        {texte}
      </button>
    </Link>
  );
}
export default ButtonGrey;
