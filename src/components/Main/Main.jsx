import { useEffect, useState } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import searchGame from "../../utils/searchGame";
import AddGameForm from "../AddGameForm/AddGameForm";
import gamesData from "../../data/games.json";

const Main = () => {
  const [search, setSearch] = useState("");
  function editSearchString(string) {
    setSearch(string);
  }

  const [gameList, setGameList] = useState(() => {
    try {
      const savedLibrary = JSON.parse(localStorage.getItem("library"));
      if (Array.isArray(savedLibrary)) {
        return savedLibrary;
      }

      return gamesData;
    } catch {
      return gamesData;
    }
  });

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(gameList));
  }, [gameList]);

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
    setGameList((prev) => prev.filter((game) => game.id !== id));
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <SearchForm editSearchString={editSearchString} />
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
