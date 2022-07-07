import Button from "../Button";
//import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
//import useCheckLike from "../../hooks/useCheckLike";

const NoteInfo = ({ entry }) => {
  const { id, title, name, description, category } = entry;
  const { token } = useUserTokenContext();
  //const { didUserLikeEntry, setDidUserLikeEntry } = useCheckLike(id);

  const getNote = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/notes/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message);
      }

     // eslint-disable-next-line no-lone-blocks
     {/*setDidUserLikeEntry(!didUserLikeEntry);

      if (didUserLikeEntry) {
        setVotes(votes - 1);
      } else {
        setVotes(votes + 1);
      */}

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="entry_info">
      <header>
        <h2>{title}</h2>
        <h3>{name}</h3>
      </header>

      <p>{description}</p>
      <span>{category }</span>

      {token && (
        <Button onClick={getNote}></Button>
      )}
      
    </section>
  );
};

export default NoteInfo;
