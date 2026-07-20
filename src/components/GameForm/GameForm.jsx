import classes from "./GameForm.module.css";
import SelectDropdown from "../../ui/SelectDropdown/SelectDropdown";
import platformList from "../../data/platformList.json";
import statusList from "../../data/statusList.json";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import { useEffect, useState } from "react";
import INITIAL_NEW_GAME from "../../utils/INITIAL_NEW_GAME";
import LibraryButton from "../../ui/LibraryButton/LibraryButton";
import gameFormInputValidation from "../../utils/gameFormInputValidation";
import useKeyListener from "../../hooks/useKeyListener";

const GameForm = ({ mode, initialGame, gameChange, gameFormToogle }) => {
  useBodyScrollLock();

  const [newGame, setNewGame] = useState(initialGame);

  function handleChange(event) {
    const { name, value } = event.target;

    setNewGame((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors([]);
  }

  const [fieldErrors, setFieldErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const validation = gameFormInputValidation(newGame);

    if (validation !== true) {
      setFieldErrors(validation);
    } else {
      setFieldErrors([]);
      gameFormToogle(false, "");

      gameChange(newGame);
    }
  }

  const FORM_MODE = {
    add: {
      title: "Add Game",
      button: "Create",
    },
    edit: {
      title: "Edit Game",
      button: "Save",
    },
  };

  useKeyListener("Escape", () => gameFormToogle(false, ""));

  return (
    <>
      <div
        className={classes.modal__overlay}
        onClick={() => gameFormToogle(false, "")}
      ></div>
      <form className={classes.gameForm} onSubmit={handleSubmit}>
        <h3 className={classes.title}>{FORM_MODE[mode].title}</h3>
        <ul className={classes.form__inner}>
          <li className={classes.form__field}>
            <label htmlFor="gameName">Name</label>
            <input
              className={classes.name_input}
              type="text"
              id="gameName"
              name="name"
              value={newGame.name}
              onChange={handleChange}
              maxLength={80}
              placeholder="Enter game title"
            />
          </li>
          <li className={classes.form__field}>
            <label htmlFor="platform">Platform</label>
            <SelectDropdown
              value={newGame.platform}
              name="platform"
              options={Object.keys(platformList)}
              onChange={handleChange}
            />
          </li>
          <li className={classes.form__field}>
            <label htmlFor="ratingEnter">Rating</label>
            <input
              className={classes.rating_input}
              type="number"
              id="ratingEnter"
              name="rating"
              value={newGame.rating}
              onChange={handleChange}
              min="1"
              max="5"
              step="0.01"
              placeholder="Enter game rating"
            />
          </li>
          <li className={classes.form__field}>
            <label htmlFor="status">Status</label>
            <SelectDropdown
              value={newGame.status}
              name="status"
              options={Object.values(statusList)}
              onChange={handleChange}
            />
          </li>
          <li className={classes.form__field}>
            <label htmlFor="coverURL">Cover</label>
            <input
              className={classes.cover_input}
              type="text"
              id="coverURL"
              name="cover"
              value={newGame.cover}
              onChange={handleChange}
              placeholder="https://..."
            />
          </li>
        </ul>
        <ul
          className={
            fieldErrors.length === 0
              ? classes.validation
              : `${classes.validation} ${classes.active}`
          }
        >
          {fieldErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className={classes.interact}>
          <LibraryButton
            name="Cancel"
            func={() => gameFormToogle(false, "")}
            colorClass={classes.cancelBtn}
          />
          <LibraryButton
            name={FORM_MODE[mode].button}
            type="submit"
            colorClass={classes.saveBtn}
          />
        </div>
      </form>
    </>
  );
};

export default GameForm;
