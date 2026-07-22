import { useState } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import filterGameByName from "../../utils/filterGameByName";
import GameForm from "../GameForm/GameForm";
import SortForm from "../SortForm/SortForm";
import sortGamesInLibrary from "../../utils/sortGamesInLibrary";
import FilterForm from "../FilterForm/FilterForm";

const Main = ({ gameList, gameFormActive, gameFormToogle, deleteGameById }) => {
  const [search, setSearch] = useState("");
  function editSearchString(string) {
    setSearch(string);
  }

  const [sortLibraryBy, setSortLibraryBy] = useState("name");
  function editSortByString(string) {
    setSortLibraryBy(string);
  }

  function getReadyLibrary() {
    return filterGameByName(
      sortGamesInLibrary(gameList, sortLibraryBy),
      search,
    );
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <div className={classes.main__content}>
        <div className={classes.library}>
          <GameList
            gamesData={getReadyLibrary()}
            deleteGame={deleteGameById}
            gameFormToogle={gameFormToogle}
          />
        </div>
        <div className={classes.interactLibrary}>
          <SearchForm editSearchString={editSearchString} />
          <button
            className={classes.addGameBtn}
            onClick={() => gameFormToogle(true, "add")}
          >
            Add game
          </button>
          <SortForm editSortByString={editSortByString} />
          <FilterForm />
        </div>
      </div>

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
    </main>
  );
};

export default Main;
