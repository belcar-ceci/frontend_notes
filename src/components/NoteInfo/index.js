import "./style.css";
const NoteInfo = ({ notes }) => {
  const { title, description, category } = notes;
  
  return (
    <section className="note_info">
      <header className="note-info-preview">
        <h2 className="note-info-title">{title}</h2>
        <span className="note-info_category">{category}</span>
      </header>
     
      <p className="note-description">{description}</p>
     
      
    </section>
  );
};

export default NoteInfo;
