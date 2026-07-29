import LibraryButton from "../../ui/LibraryButton/LibraryButton";
import classes from "./DeleteConfirmationForm.module.css";
import { deleteGameById, closeLibraryModal } from "../../store/librarySlice";
import { useDispatch } from "react-redux";

const DeleteConfirmationForm = ({ gameId }) => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(deleteGameById(gameId));
    dispatch(closeLibraryModal());
  }

  return (
    <form className={classes.deleteConfirmationForm} onSubmit={handleSubmit}>
      <p className={classes.title}>
        Are you sure you want to <span>delete</span> this game?
      </p>
      <div className={classes.interract__wrapper}>
        <LibraryButton
          name="Confirm"
          colorClass={classes.confirmBtn}
          type="submit"
        />
        <LibraryButton
          name="Cancel"
          colorClass={classes.cancelBtn}
          func={() => dispatch(closeLibraryModal())}
        />
      </div>
    </form>
  );
};

export default DeleteConfirmationForm;
