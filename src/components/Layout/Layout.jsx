import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import GameForm from "../GameForm/GameForm";

const Layout = ({ gameFormActive, gameFormToogle }) => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <div className="container">
          <div className={classes.contentWrapper}>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </div>
      {gameFormActive.isActive === true ? (
        <GameForm
          mode={gameFormActive.action}
          initialGame={gameFormActive.game}
          gameChange={gameFormActive.func}
          gameFormToogle={gameFormToogle}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout;
