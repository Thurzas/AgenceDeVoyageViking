import "./App.css";
import BookRaid from "./components/BookRaid/BookRaid";
import ExplorationCustomizable from "./components/BookRaid/ExplorationCustomizable";
import NosGuerrier from "./components/BookRaid/NosGuerrier";
import TriplePitcure from "./components/BookRaid/NosGuerrier/TriplePicture";
import ReserverRaid from "./components/BookRaid/ReserverRaid";
import Footer from "./components/footer/Footer";

import NavBar from "./components/NavBar/NavBar";
import ComponentExploration from "./components/Regle/ComponentExploration";
function App() {
  return (
    <>
      <NavBar />
      <BookRaid />
      <NosGuerrier />
      <TriplePitcure />
      <ReserverRaid />
      <ExplorationCustomizable />
      <ComponentExploration />
      <Footer />
    </>
  );
}
export default App;
