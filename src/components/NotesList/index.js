import "./style.css";
import List from "../List";
import NoteInfo from "../NoteInfo";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  return (
    <List
      className="notes_list"
      data={notes}
      render={(notes) => (
        <li className="prueba" key={notes.id}>
          <Link className="p2 p2-logo"to={`/notes/${notes.id}`}>
            <NoteInfo notes={notes} />
          </Link>
          {notes.data}
        </li>
      )}
    />
  );
};

export default NotesList;
