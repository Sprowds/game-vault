import { useState } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import filterGameByName from "../../utils/filterGameByName";
import GameForm from "../GameForm/GameForm";
import { useGamesLibrary } from "../../hooks/useGamesLibrary";

const Main = () => {
  const [search, setSearch] = useState("");
  function editSearchString(string) {
    setSearch(string);
  }

  const { gameList, gameFormActive, gameFormToogle, deleteGameById } =
    useGamesLibrary();

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
          initialGame={gameFormActive.game}
          gameChange={gameFormActive.func}
          gameFormToogle={gameFormToogle}
        />
      ) : (
        <></>
      )}
      <GameList
        gamesData={filterGameByName(gameList, search)}
        deleteGame={deleteGameById}
        gameFormToogle={gameFormToogle}
      />
    </main>
  );
};

export default Main;
