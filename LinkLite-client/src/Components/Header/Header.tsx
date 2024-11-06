import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import authApiHandler from "../../services/authApiHandler";
import "./Header.css";


type HeaderProps = {
  toggleSidebar: (isSidebarOpen: boolean) => void,
  isSidebarOpen: boolean
}

function Header({ toggleSidebar, isSidebarOpen }: HeaderProps) {
  const { user, clearUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authApiHandler.logout();
      clearUser();
      navigate("/");
    } catch (err) {
      console.error("Logout error.", err);
    }
  };

  return (
    <div className="header__container">
      <button onClick={() => toggleSidebar(isSidebarOpen)} className="header__btn--is-toggled">
        <div className={`header__arrow ${isSidebarOpen ? 'header__arrow--open' : 'header__arrow--closed'}`}>
        &#x25B6; {/*Right arrow symbol*/}
        </div>
      </button>
      <h1 className="header__title">LinkLite</h1>
      {
      user ? <button onClick={handleLogout} className="header__btn--logs">Logout</button> : 
      <Link to={"/login"} className="header__btn--logs">Connect</Link>
      }
      
    </div>
  );
}

export default Header;
