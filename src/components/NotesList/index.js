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
        <li key={notes.id}>
          <Link to={`/notes/${notes.id}`}>
            <NoteInfo notes={notes} />
          </Link>
        </li>
      )}
    />
  );
};

export default NotesList;
