import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import GameForm from "../GameForm/GameForm";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import DeleteConfirmationForm from "../DeleteConfirmationForm/DeleteConfirmationForm";

const Layout = ({
  modalWindowToggle,
  editModalWindowToggle,
  gameFormActive,
  gameFormToogle,
  deleteGameById,
  deleteConfirmationFormToggle,
  deleteConfirmationFormToggleHandler,
}) => {
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
      {modalWindowToggle.isActive === true ? (
        <ModalOverlay
          window={
            modalWindowToggle.window === "GameForm" ? (
              <GameForm
                mode={gameFormActive.action}
                initialGame={gameFormActive.game}
                gameChange={gameFormActive.func}
                gameFormToogle={gameFormToogle}
                editModalWindowToggle={editModalWindowToggle}
              />
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
