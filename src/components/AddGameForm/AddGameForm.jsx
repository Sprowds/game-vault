import classes from "./AddGameForm.module.css";
import SelectDropdown from "../../ui/SelectDropdown/SelectDropdown";
import platformList from "../../data/platformList.json";
import statusList from "../../data/statusList.json";
import { useState, useEffect } from "react";
import INITIAL_NEW_GAME from "../../utils/INITIAL_NEW_GAME";

const AddGameForm = ({ addNewGame, setAddGameActive }) => {
  const [newGame, setNewGame] = useState(INITIAL_NEW_GAME);

  function handleChange(event) {
    const { name, value } = event.target;

    setNewGame((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAddGameActive(false);

    addNewGame(newGame);
    setNewGame(INITIAL_NEW_GAME);
  }

  useEffect(() => {
    document.body.classList.add("no_scroll");

    return () => {
      document.body.classList.remove("no_scroll");
    };
  }, []);

  return (
    <>
      <div
        className={classes.modal__overlay}
        onClick={() => setAddGameActive(false)}
      ></div>
      <form className={classes.addGameForm} onSubmit={handleSubmit}>
        <h3 className={classes.title}>Add Game</h3>
        <div className="name">
          <label htmlFor="gameName">Name</label>
          <input
            type="text"
            name="name"
            value={newGame.name}
            onChange={handleChange}
          />
        </div>
        <SelectDropdown
          value={newGame.platform}
          name="platform"
          options={Object.keys(platformList)}
          onChange={handleChange}
        />
        <div className="rating">
          <label htmlFor="ratingEnter">Rating</label>
          <input
            type="number"
            id="ratingEnter"
            name="rating"
            value={newGame.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.01"
          />
        </div>
        <SelectDropdown
          value={newGame.status}
          name="status"
          options={Object.values(statusList)}
          onChange={handleChange}
        />
        <div className="cover">
          <label htmlFor="coverURL">Cover</label>
          <input
            type="text"
            id="coverURL"
            name="cover"
            value={newGame.cover}
            onChange={handleChange}
          />
        </div>
        <button className={classes.btn} type="submit">
          Create
        </button>
        <span className={classes.close} onClick={() => setAddGameActive(false)}>
          x
        </span>
      </form>
    </>
  );
};

export default AddGameForm;
