import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const sidebarItems = [
  { name: "Library", path: "/library" },
  { name: "Favorites", path: "/favorites" },
  { name: "Statistics", path: "/statistics" },
  { name: "Settings", path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.menu}>
        <ul className={classes.list}>
          {sidebarItems.map((item) => {
            return (
              <li className={classes.item} key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${classes.link} ${isActive ? classes.active : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
