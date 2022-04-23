import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink to="/">HOME</NavLink> <NavLink to="/">STUDENT</NavLink>
    </div>
  );
};
export default NavBar;
