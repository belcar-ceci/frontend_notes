import "./style.css";
const NoteInfo = ({ notes }) => {
  const { title, description, category } = notes;
  
  return (
    <section className="note_info">
      <header className="note-info-preview">
        <h2 className="note-info-title">{title}</h2>
      </header>

      <section className="note-info_data">

      <p>{description}</p>
      <span className="note-info_category">{category }</span>

      {/* {token && (
        <Button onClick={getNote}></Button>
      )} */}
      </section>
    </section>
  );
};

export default NoteInfo;
