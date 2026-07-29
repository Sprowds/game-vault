import { useCallback } from "react";
import classes from "./ModalOverlay.module.css";
import useKeyListener from "../../hooks/useKeyListener";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import { toggleGameFormModal } from "../../store/librarySlice";
import { useDispatch } from "react-redux";

const ModalOverlay = ({ window }) => {
  useBodyScrollLock();

  const dispatch = useDispatch();
  const turnOffModal = () =>
    dispatch(
      toggleGameFormModal({
        action: false,
        window: "",
        data: null,
      }),
    );

  const escapeKeyHandler = useCallback(() => {
    turnOffModal();
  }, []);
  useKeyListener("Escape", escapeKeyHandler);

  return (
    <>
      <div
        className={classes.modal__overlay}
        onClick={() => turnOffModal()}
      ></div>
      {window}
    </>
  );
};

export default ModalOverlay;
