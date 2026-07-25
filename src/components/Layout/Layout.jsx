import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import GameForm from "../GameForm/GameForm";
import ModalWindow from "../ModalWindow/ModalWindow";

const Layout = ({
  modalWindowToggle,
  editModalWindowToggle,
  gameFormActive,
  gameFormToogle,
}) => {
  const gameFormElement = (
    <GameForm
      mode={gameFormActive.action}
      initialGame={gameFormActive.game}
      gameChange={gameFormActive.func}
      gameFormToogle={gameFormToogle}
      editModalWindowToggle={editModalWindowToggle}
    />
  );

  const modalWindowElement = (
    <ModalWindow
      window={modalWindowToggle.window === "GameForm" ? gameFormElement : <></>}
      editModalWindowToggle={editModalWindowToggle}
    />
  );

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
      {modalWindowToggle.isActive === true ? modalWindowElement : <></>}
    </>
  );
};

export default Layout;
