import "./style.css";
import List from "../List";
import NoteInfo from "../NoteInfo/index";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  return (
    <List
      className="notes_list"
      data={notes}
      render={(note) => (
        <li key={note.id}>
          <Link to={`/entry/${note.id}`}>
            <NoteInfo entry={note} />
          </Link>
        </li>
      )}
    />
  );
};

export default NotesList;
