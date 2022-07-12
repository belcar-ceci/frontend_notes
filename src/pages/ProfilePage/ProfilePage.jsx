import "./style.css";
//import { useUserTokenContext } from "../../contexts/UserTokenContext";
//import { Navigate } from "react-router-dom";
//import Avatar from "../../components/Avatar";
import NotesInfo from "../../components/NotesList";
//import Spinner from "../../components/Spinner";
//import Spinner from "../../components/Spinner";
//import ErrorMessage from "../../components/ErrorMessage";
//import useUser from "../../hooks/useUser";
import useFetch from '../../hooks/useFetch'
import {getAllNotesEndpoint} from '../../api'
import { useParams } from "react-router-dom";


const ProfilePage = () => {
  //const { token } = useUserTokenContext();
  const { id } = useParams();
  const { data } = useFetch(getAllNotesEndpoint(id));
  console.log(data)
  // const { user, loading, error } = useUser();
  // console.log(user)
  // const { user } = useUser();
  // console.log(user)

  // const { avatar, name, entries } = user || {};

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  // if (loading) {
  //   return <Spinner />;
  // } 

  // if (error) {
  //   return <ErrorMessage error={error} />;
  // }

  return (
    <section className="profile_user">
      <h2>User profile </h2>
      <section className="user_info_profile">
            <h4 className="title_profile-user">My info</h4>

            {/* <p>Name: {user.name}</p>
            <p>Email: {user.email}</p> */}
          </section>
      {data && <NotesInfo notes={data} />}
        <>
          <section>
            <h2>My sticky notes</h2>

            {/*data?.id.length ? (
              <NotesInfo notes={data} />
            ) : (
              <p>No notes sticky</p>
            )*/}

          </section>
        </>
     
    </section>
  );
}

  export default ProfilePage;
