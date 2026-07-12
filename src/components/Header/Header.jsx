import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__inner}>
          <a href="" className={classes.logo}>
            Game<span>Vault</span>
          </a>
          <button className={classes.user}>Madi</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
