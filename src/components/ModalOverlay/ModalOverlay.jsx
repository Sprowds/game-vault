import { useCallback } from "react";
import classes from "./ModalOverlay.module.css";
import useKeyListener from "../../hooks/useKeyListener";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

const ModalOverlay = ({ window, editModalWindowToggle }) => {
  useBodyScrollLock();

  const escapeKeyHandler = useCallback(() => {
    editModalWindowToggle(false, "");
  }, []);
  useKeyListener("Escape", escapeKeyHandler);

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

export default ModalOverlay;
