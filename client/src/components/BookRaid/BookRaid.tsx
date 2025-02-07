import "./BookRaid.css";
import BigCardBookRaid from "./components/BigCardBookRaid";
import DescriptionBookRaid from "./components/DescriptionBookRaid";
function BookRaid() {
  return (
    <div className="DivBookRaid">
      <BigCardBookRaid />
      <DescriptionBookRaid />
    </div>
  );
}
export default BookRaid;
