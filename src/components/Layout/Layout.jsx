import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import GameForm from "../GameForm/GameForm";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import DeleteConfirmationForm from "../DeleteConfirmationForm/DeleteConfirmationForm";
import { useSelector } from "react-redux";

const Layout = () => {
  const modalWindowStatus = useSelector((state) => state.library.modal);
  const gameForm = useSelector((state) => state.library.gameForm);
  const deleteConfirmationForm = useSelector(
    (state) => state.library.deleteConfirmationForm,
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
      {modalWindowStatus.isOpen === true ? (
        <ModalOverlay
          window={
            modalWindowStatus.modalType === "gameForm" ? (
              <GameForm mode={gameForm.mode} initialGame={gameForm.game} />
            ) : modalWindowStatus.modalType === "deleteConfirmationForm" ? (
              <DeleteConfirmationForm gameId={deleteConfirmationForm.gameId} />
            ) : (
              <></>
            )
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout;
