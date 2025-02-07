import { Link } from "react-router-dom";
import "./css/ButtonGrey.css";

interface ButtonGreyProps {
  texte: string;
  link: string;
  onClick?: () => void;
}

function ButtonGrey({ texte, link, onClick }: ButtonGreyProps) {
  return (
    <Link to={link}>
      <button type="button" className="ButtonGrey" onClick={onClick}>
        {texte}
      </button>
    </Link>
  );
}
export default ButtonGrey;
