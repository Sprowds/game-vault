import { useState, useMemo } from "react";
import classes from "./Main.module.css";
import GameList from "../GameList/GameList";
import SearchForm from "../SearchForm/SearchForm";
import GameForm from "../GameForm/GameForm";
import SortForm from "../SortForm/SortForm";
import sortGamesInLibrary from "../../utils/sortGamesInLibrary";
import FilterLibrary from "../FilterLibrary/FilterLibrary";
import { filterGamesLibrary, filterToggle } from "../../utils/filterLibrary";

const Main = ({ gameList, gameFormActive, gameFormToogle, deleteGameById }) => {
  const [search, setSearch] = useState("");
  function editSearchString(string) {
    setSearch(string);
  }

  const [sortLibraryBy, setSortLibraryBy] = useState("name");
  function editSortByString(string) {
    setSortLibraryBy(string);
  }

  const [filterLibrary, setFilterLibrary] = useState({
    platform: [],
    status: [],
  });

  function editFilterLibrary(filterCategory, filterString, checked) {
    filterToggle(filterCategory, filterString, setFilterLibrary, checked);
  }

  const readyLibrary = useMemo(() => {
    return filterGamesLibrary(
      sortGamesInLibrary(gameList, sortLibraryBy),
      search,
      filterLibrary,
    );
  }, [gameList, sortLibraryBy, filterLibrary, search]);

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <div className={classes.main__content}>
        <div className={classes.library}>
          <GameList
            gamesData={readyLibrary}
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
          <FilterLibrary
            filterLibrary={filterLibrary}
            editFilterLibrary={editFilterLibrary}
          />
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
