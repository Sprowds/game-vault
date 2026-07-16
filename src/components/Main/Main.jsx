import { useEffect, useState } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import searchGame from "../../utils/searchGame";
import GameForm from "../GameForm/GameForm";
import gamesData from "../../data/games.json";
import INITIAL_NEW_GAME from "../../utils/INITIAL_NEW_GAME";

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

  const [gameFormActive, setGameFormActive] = useState({
    isActive: false,
    action: "",
  });

  function gameFormToogle(isActive, action, gameId = "") {
    if (action === "edit") {
      setGameFormActive({
        isActive,
        action,
        game: gameList.find((game) => {
          if (game.id === gameId) return game;
        }),
      });
    } else {
      setGameFormActive({
        isActive,
        action,
      });
    }
  }

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

  function editGameById(gameNewData) {
    setGameList((prevGames) =>
      prevGames.map((game) => {
        if (game.id === gameNewData.id)
          return { ...gameNewData, rating: Number(gameNewData.rating) };
        else return game;
      }),
    );
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
        onClick={() => gameFormToogle(true, "add")}
      >
        Add game
      </button>
      {gameFormActive.isActive === true ? (
        <GameForm
          mode={gameFormActive.action}
          initialGame={
            gameFormActive.action === "edit"
              ? gameFormActive.game
              : INITIAL_NEW_GAME
          }
          gameChange={
            gameFormActive.action === "edit" ? editGameById : addNewGame
          }
          gameFormToogle={gameFormToogle}
        />
      ) : (
        <></>
      )}
      <GameList
        gamesData={searchGame(gameList, search)}
        deleteGame={deleteGameById}
        gameFormToogle={gameFormToogle}
      />
    </main>
  );
};

export default Main;
