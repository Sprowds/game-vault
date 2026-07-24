import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__inner}>
          <NavLink to="/library" className={classes.logo}>
            Game<span>Vault</span>
          </NavLink>
          <button className={classes.user}>Madi</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
