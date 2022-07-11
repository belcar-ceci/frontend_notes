//import Button from "../Button";
//import { useState } from "react";
//import { useUserTokenContext } from "../../contexts/UserTokenContext";
//import { toast } from "react-toastify";


const NoteInfo = ({ notes }) => {
  const { title, description, category } = notes;
  //const { token } = useUserTokenContext();

  // const getNote = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const res = await fetch(
  //       `${process.env.REACT_APP_API_URL}/notes/${id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (!res.ok) {
  //       const body = await res.json();
  //       console.log(body)
  //       throw new Error(body.message);
  //     }


  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

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
