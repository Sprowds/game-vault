import { useCallback } from "react";
import classes from "./ModalOverlay.module.css";
import useKeyListener from "../../hooks/useKeyListener";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import { closeLibraryModal } from "../../store/librarySlice";
import { useDispatch } from "react-redux";

const ModalOverlay = ({ window }) => {
  useBodyScrollLock();

  const dispatch = useDispatch();

  const escapeKeyHandler = useCallback(() => {
    dispatch(closeLibraryModal());
  }, [dispatch]);
  useKeyListener("Escape", escapeKeyHandler);

  return (
    <>
      <div
        className={classes.modal__overlay}
        onClick={() => dispatch(closeLibraryModal())}
      ></div>
      {window}
    </>
  );
};

export default ModalOverlay;
