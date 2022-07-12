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
          <button className="btn-hovers creates" >
          <Link to="/create/notes" >
            ➕ Sticky
          </Link>
          </button>
        )} 
    </nav>
      <nav>
        <ul>
          {!token && (
            <div className="header-context-user">
              
                <Link to="/login">Login</Link>
              
              <button className="header-register_user">
                <Link to="/register">Register</Link>
              </button>
            </div>
          )}
        </ul>
        <section className="close_profile">
          {token && (
            
              <Button
                className="header_close"
                onClick={() => {
                  setToken("");
                }}
              >
                <Link to="/">
              Logo ut
              </Link>
              </Button>
          
          )}
          
          {token && (
            <button className="profile_btn">
              <Link to="/profile">
              Profile
              </Link>
            </button>
          )}
        </section>
      </nav>

    </header>
  )
}

export default Header;