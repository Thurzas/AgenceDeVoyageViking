import ButtonBlue from "../Button/ButtonBlue";
import ButtonGrey from "../Button/ButtonGrey";
import "./NavBar.css";
import Logo from "./components/Logo";

function NavBar() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>Historique de raid</li>
        <li>Nos guerriers</li>
        <li>Service à la carte</li>
        <li>Contact</li>
      </ul>
      <div className="AllButton">
        <ButtonBlue texte="Booker un raid" link="/new-raid" />
        <ButtonGrey texte="Se connecter" link="#" />
      </div>
    </nav>
  );
}

export default NavBar;
