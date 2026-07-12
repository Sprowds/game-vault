import classes from "./Sidebar.module.css";

const sidebarItems = ["Library", "Favorites", "Statistics", "Settings"];

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <nav className={classes.menu}>
        <ul className={classes.list}>
          {sidebarItems.map((item) => {
            return (
              <li className={classes.item} key={item}>
                <a href="#" className={classes.link}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
