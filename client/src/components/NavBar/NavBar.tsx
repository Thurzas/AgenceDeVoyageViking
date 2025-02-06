import ButtonNav from "../Button/ButtonNav";
import "./NavBar.css";
import Logo from "./components/Logo";
function NavBar() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>Historique de raid</li>
        <li>Nos guerriés</li>
        <li>Service a la carte</li>
        <li>Contact</li>
      </ul>
      <ButtonNav />
    </nav>
  );
}

export default NavBar;
