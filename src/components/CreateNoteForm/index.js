import "./style.css";
import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const { token } = useUserTokenContext();
  const navigate = useNavigate();

  const createNote = async (e) => {
    try {
      e.preventDefault();

      const postNoteRes = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, category }),
      });

      const postNoteBody = await postNoteRes.json();

      if (!postNoteRes.ok) {
        throw new Error(postNoteBody.message);
      }

      const {
        data: { id },
      } = postNoteBody;

      toast.success("Note created succesfully");
      navigate(`/notes/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <form className="create_note" onSubmit={createNote}>
        <label className="note-label" htmlFor="title">Title:</label>
        <input
          className="controls"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label className="note-label" htmlFor="description">Description:</label>
        <input
          className="controls"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label className="note-label" htmlFor="category">Category:</label>
        <select
        className="controls"
        onChange={(e) => {
            setCategory(e.target.value);
          }}
      >
        <option value={""}>Select a Category</option>
        <option value={"Deportes"}>Deportes</option>
        <option value={"Cocina"}>Cocina</option>
        <option value={"Moda"}>Moda</option>
      </select>
        {/* <input
          className="controls"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        /> */}

        <Button className="button_component btnCreateNote">Create Note</Button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default CreateNoteForm;
