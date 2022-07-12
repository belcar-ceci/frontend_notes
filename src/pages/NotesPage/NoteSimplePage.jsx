import "./style.css"
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { getNoteByIdEndpoint } from '../../api'
import { useParams } from 'react-router'
import NoteInfo from '../../components/NoteInfo'
import { Link } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import LogoMore from '../../assets/img/plus_note.svg'

const NoteSimplePage = () => {
  const { token } = useUserTokenContext();
  const { id } = useParams();
  const { data } = useFetch(getNoteByIdEndpoint(id));
  console.log(data);

  
  return (
    <div>
      {data && <NoteInfo notes={data} />}
      {token && (
        <div className="btn-more">
        <button className="btn-hover create" >
          
          <Link to="/create/notes" >
            <img
            src={LogoMore}
            width="50%"
            alt=""
          />
          </Link>
          </button>
          </div>
        )}
          
    </div>
  )
}

export default NoteSimplePage