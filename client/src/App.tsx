import "./App.css";
import BookRaid from "./components/BookRaid/BookRaid";
import NosGuerrier from "./components/BookRaid/NosGuerrier";
import ReserverRaid from "./components/BookRaid/ReserverRaid";

import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <BookRaid />
      <NosGuerrier />
      <ReserverRaid />
    </>
  );
}
export default App;
