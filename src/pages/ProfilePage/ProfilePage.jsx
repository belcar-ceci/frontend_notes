import "./style.css";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { Navigate } from "react-router-dom";
//import Avatar from "../../components/Avatar";
import NotesInfo from "../../components/NotesList";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import useUser from "../../hooks/useUser";


const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const { user, loading, error } = useUser();

  // const { avatar, name, entries } = user || {};

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Spinner />;
  } 

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <section className="profile">
      <h2>User profile</h2>

      {user && (
        <>
          <section className="user_info">
            <h2>My info</h2>

            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </section>

          <section>
            <h2>My sticky notes</h2>

            {user?.notes.length ? (
              <NotesInfo notes={user?.notes} />
            ) : (
              <p>No notes sticky</p>
            )}
          </section>
        </>
      )}
    </section>
  );
}

  export default ProfilePage;
