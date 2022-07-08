import "./style.css";
import { Link } from "react-router-dom";
//import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/index";
import Logo from '../../assets/img/Logo_sn.svg'

//import RegisterForm from '../RegisterForm'


const Header = () => {
//const { token, setToken } = useUserTokenContext();
  
  
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
          <Link to="/create/note" className="red_button">
            Create entry
          </Link>
    </nav>
      <nav>
        <ul>
          <div className="header-context-user">
              <Link to="/login">Login</Link>
              <button className="header-register_user">
                <Link to="/register">Register</Link>
              </button>
          </div>
        
          
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