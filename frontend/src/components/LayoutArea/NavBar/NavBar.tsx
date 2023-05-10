import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
          {/* <NavLink to={"/meetings/"}> get All Meetings </NavLink> |  */}
          <NavLink to={"/dev_groups/"}> get All devGroups </NavLink> |
          <NavLink to={"/add_meeting/"}> add new Meeting</NavLink>
            
        </div>
    );
}

export default NavBar;
