import classes from "./ModalWindow.module.css";
import useKeyListener from "../../hooks/useKeyListener";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

const ModalWindow = ({ window, editModalWindowToggle }) => {
  useKeyListener("Escape", () => editModalWindowToggle(false, ""));
  return (
    <>
      <div
        className={classes.modal__overlay}
        onClick={() => editModalWindowToggle(false, "")}
      ></div>
      {window}
    </>
  );
};

export default ModalWindow;
