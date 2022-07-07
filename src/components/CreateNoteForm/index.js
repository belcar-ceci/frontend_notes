import "./style.css";
import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
//import { CloudUploadOutlined } from "@ant-design/icons";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  //const filesRef = useRef();
  const { token } = useUserTokenContext();
  const navigate = useNavigate();

  const createNote = async (e) => {
    try {
      e.preventDefault();

      // eslint-disable-next-line no-lone-blocks
      {/*if (!filesRef.current.files.length) {
        throw new Error("You must upload at least one image");
      }*/}

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

      // eslint-disable-next-line no-lone-blocks
      {/*const formData = new FormData();

      for (const image of filesRef.current.files) {
        formData.append("images", image);
      }

      const postImagesRes = await fetch(
        `http://localhost:8080/entries/${id}/images`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!postImagesRes.ok) {
        const postImagesBody = await postImagesRes.json();

        throw new Error(postImagesBody.message);
      }*/}

      toast.success("Entry created succesfully");
      navigate(`/entry/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        {/*<label htmlFor="images">
          <CloudUploadOutlined />
        </label>
        <input type="file" id="images" ref={filesRef} multiple />*/}

        <Button className="red_button">Send entry</Button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default CreateNoteForm;
