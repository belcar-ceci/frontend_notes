import React from 'react'
import useFetch from '../../hooks/useFetch'
import { getNoteByIdEndpoint } from '../../api'
import { useParams } from 'react-router'
import NoteInfo from '../../components/NoteInfo'
//import NoteList from "../../components/NotesList"

const NoteSimplePage = () => {
  
  const { id } = useParams();
  const { data } = useFetch(getNoteByIdEndpoint(id));
  console.log(data);

  
  return (
    <div>
      NoteSimplePage y aqui van las notas queha creado el user
      {/*<NoteList />*/}
      {data && <NoteInfo notes={data}/>}
    </div>
  )
}

export default NoteSimplePage