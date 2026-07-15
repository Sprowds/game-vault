import { useState } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import searchGame from "../../utils/searchGame";
import AddGameForm from "../AddGameForm/AddGameForm";
import gamesData from "../../data/games.json";

const Main = () => {
  const [search, setSearch] = useState("");
  const [gameList, setGameList] = useState(gamesData);
  const [addGameActive, setAddGameActive] = useState(false);

  function addNewGame(newGame) {
    setGameList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...newGame,
        rating: Number(newGame.rating),
      },
    ]);
  }

  function deleteGameById(id) {
    setGameList(gameList.filter((game) => game.id !== id));
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <SearchForm setSearch={setSearch} />
      <button
        className={classes.addGameBtn}
        onClick={() => setAddGameActive(true)}
      >
        Add game
      </button>
      {addGameActive ? (
        <AddGameForm
          addNewGame={addNewGame}
          setAddGameActive={setAddGameActive}
        />
      ) : (
        <></>
      )}
      <GameList
        gamesData={searchGame(gameList, search)}
        deleteGame={deleteGameById}
      />
    </main>
  );
};

export default Main;
