import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./Sidebar.css"

type SidebarProps = {
  isSidebarOpen: boolean;
};

function Sidebar({ isSidebarOpen }: SidebarProps) {
  const { user } = useUser();
  return (
    <div
      className={`sidebar__container ${
        isSidebarOpen ? "sidebar__container--closed" : "sidebar__container--open"
      }`}
    >
      <div className="sidebar__links">
        <div className="sidebar__link-container">
          <Link to={"/"} className="sidebar__link-home">
            Home
          </Link>
        </div>
        <div className="sidebar__link-container">
          {user ? (
            <Link
              to={"/my-page"}
              className="sidebar__link"
            >
              My Page
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="sidebar__link"
            >
              My Page
            </Link>
          )}
        </div>
        <Link to={"/about"} className="sidebar__link">
          About
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
