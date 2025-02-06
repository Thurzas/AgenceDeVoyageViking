import "./App.css";
import BookRaid from "./components/BookRaid/BookRaid";
import ExplorationCustomizable from "./components/BookRaid/ExplorationCustomizable";
import NosGuerrier from "./components/BookRaid/NosGuerrier";
import TriplePitcure from "./components/BookRaid/NosGuerrier/TriplePicture";
import ReserverRaid from "./components/BookRaid/ReserverRaid";

import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <BookRaid />
      <NosGuerrier />
      <TriplePitcure />
      <ReserverRaid />
      <ExplorationCustomizable />
    </>
  );
}
export default App;
