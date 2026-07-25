import LibraryButton from "../../ui/LibraryButton/LibraryButton";
import classes from "./DeleteConfirmationForm.module.css";

const DeleteConfirmationForm = ({
  deleteGame,
  deleteConfirmationFormToggle,
  deleteConfirmationFormToggleHandler,
  editModalWindowToggle,
}) => {
  function handleSubmit(event) {
    event.preventDefault();

    deleteGame(deleteConfirmationFormToggle.gameId);
    deleteConfirmationFormToggleHandler(false, "");
    editModalWindowToggle(false, "");
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
          func={() => {
            deleteConfirmationFormToggleHandler(false, "");
            editModalWindowToggle(false, "");
          }}
        />
      </div>
    </form>
  );
};

export default DeleteConfirmationForm;
