
const NoteInfo = ({ notes }) => {
  const { title, description, category } = notes;
  
  return (
    <section className="note_info">
      <header>
        <h2>{title}</h2>
       
      </header>

      <p>{description}</p>
      <span>{category }</span>

      {/* {token && (
        <Button onClick={getNote}></Button>
      )} */}
      
    </section>
  );
};

export default NoteInfo;
