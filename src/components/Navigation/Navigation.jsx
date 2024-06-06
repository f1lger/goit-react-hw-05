import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import clsx from "clsx";
export default function Navigation() {
const navigationClass = ({ isActive }) => {
          return clsx(style.navLink, isActive && style.isActive);
}
  return (
    <div>
      <nav className={style.navCont}>
        <NavLink to="/" className={navigationClass}>
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/movies" className={navigationClass}>
          <h3>Movies</h3>
        </NavLink>
      </nav>
    </div>
  );
}
