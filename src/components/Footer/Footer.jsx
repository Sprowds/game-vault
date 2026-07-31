import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer__inner}>
          <NavLink to="/library" className={classes.logo}>
            Game<span>Vault</span>
          </NavLink>
          <ul className={classes.contacts}>
            <li className={classes.contacts__item}>
              <a href="tel:+77082330226" className={classes.contacts__link}>
                +7-708-233-02-26
              </a>
            </li>
            <li className={classes.contacts__item}>
              <a
                href="mailto:saint_sprow@mail.ru"
                className={classes.contacts__link}
              >
                saint_sprow@mail.ru
              </a>
            </li>
          </ul>
        </div>
        <p className={classes.copy}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
