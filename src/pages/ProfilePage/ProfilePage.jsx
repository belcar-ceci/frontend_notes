import "./style.css";
import NotesList from "../../components/NotesList";
//import NoteInfo from "../../components/NoteInfo";
import useFetch from '../../hooks/useFetch'
import {getAllNotesEndpoint} from '../../api'
import { useParams } from "react-router-dom";


const ProfilePage = () => {

  const { id } = useParams();
  const { data } = useFetch(getAllNotesEndpoint(id));
  console.log(data)


  return (
    <section className="profile_user">
      <h2 className="title-profile-user">My sticky notes</h2>
      {data && <NotesList notes={data} />}
      
      
    </section>
  );
}

  export default ProfilePage;
