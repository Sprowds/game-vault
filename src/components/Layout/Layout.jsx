import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import GameForm from "../GameForm/GameForm";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import DeleteConfirmationForm from "../DeleteConfirmationForm/DeleteConfirmationForm";
import { useSelector } from "react-redux";
import { libraryGameFormToggle } from "../../utils/libraryGameFormToggle";

const Layout = ({
  modalWindowToggle,
  editModalWindowToggle,
  gameFormActive,
  gameFormToogle,
  deleteGameById,
  deleteConfirmationFormToggle,
  deleteConfirmationFormToggleHandler,
}) => {
  const modalWindowStatus = useSelector((state) => state.library.modal);
  const gameForm = useSelector((state) => state.library.gameForm);

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
      {modalWindowStatus.isActive === true ? (
        <ModalOverlay
          window={
            modalWindowStatus.window === "gameForm" ? (
              <GameForm mode={gameForm.mode} initialGame={gameForm.game} />
            ) : modalWindowToggle.window === "DeleteConfirmationForm" ? (
              <DeleteConfirmationForm
                deleteGame={deleteGameById}
                deleteConfirmationFormToggle={deleteConfirmationFormToggle}
                deleteConfirmationFormToggleHandler={
                  deleteConfirmationFormToggleHandler
                }
                editModalWindowToggle={editModalWindowToggle}
              />
            ) : (
              <></>
            )
          }
          editModalWindowToggle={editModalWindowToggle}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Layout;
