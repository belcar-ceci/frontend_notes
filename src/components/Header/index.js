import "./style.css";
import { Link } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/index";
import Logo from '../../assets/img/Logo_sn.svg'

//import RegisterForm from '../RegisterForm'


const Header = () => {
const { token, setToken } = useUserTokenContext();
  
  return (
    <header className="header">

      <Link to="/">
        <section className="header-title">
        <img
            src={Logo}
            width="50%"
            alt=""
          />
        </section>
      </Link>
      <nav>
        {token && (
          <Link to="/create/notes" className="red_button">
            Create entry
          </Link>
        )};
    </nav>
      <nav>
        <ul>
          {token && (
            <div className="header-context-user">
              <button className="header-login_user">
                <Link to="/login">Login</Link>
              </button>
              <button className="header-register_user">
                <Link to="/register">Register</Link>
              </button>
            </div>
          )};
          {token && (
            <li>
              <Button
                className="header_close"
                onClick={() => {
                  setToken("");
                }}
              >
                Log out
              </Button>
            </li>
          )}
          {token && (
            <button>
              <Link to="/profile">

              </Link>
            </button>
          )}
        </ul>
      </nav>




    </header>
  )
}

export default Header;