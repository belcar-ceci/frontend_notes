import "./style.css";
import { Link } from "react-router-dom";
//import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/index";

//import RegisterForm from '../RegisterForm'


const Header = () => {
//const { token, setToken } = useUserTokenContext();
  
  
  return (
    <header className="header">

        <Link to="/">
        <h1>Sticky Notes.</h1>
        <img
            src={require("../../assets/img/sticky_note.png")}
            alt=""
            width="38%"
          />
      </Link>
    <nav>
          <Link to="/create/note" className="red_button">
            Create entry
          </Link>
        
      </nav>

  
      <nav>
        <ul>
          
            <>
              <button className="register">
                <Link to="/register">Register</Link>
              </button>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
        
          
            <li>
              <Button
                className="header_close"
              >
                Log out
              </Button>
            </li>
        
          
            <button>
              <Link to="/profile">

              </Link>
            </button>
          
        </ul>
      </nav>




    </header>
  )
}

export default Header;