import { useState } from "react";
import classes from "./LibraryPage.module.css";
import GameList from "../../components/GameList/GameList";
import SearchForm from "../../components/SearchForm/SearchForm";
import SortForm from "../../components/SortForm/SortForm";
import FilterLibrary from "../../components/FilterLibrary/FilterLibrary";
import { filterToggle } from "../../utils/filterLibrary";
import { useDispatch } from "react-redux";
import { toggleGameFormModal } from "../../store/librarySlice";
import INITIAL_NEW_GAME from "../../utils/INITIAL_NEW_GAME";

const LibraryPage = () => {
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

  const dispatch = useDispatch();

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <div className={classes.main__content}>
        <div className={classes.library}>
          <GameList
            sortLibraryBy={sortLibraryBy}
            search={search}
            filterLibrary={filterLibrary}
          />
        </div>
        <div className={classes.interactLibrary}>
          <SearchForm editSearchString={editSearchString} />
          <button
            className={classes.addGameBtn}
            onClick={() => {
              dispatch(
                toggleGameFormModal({
                  action: true,
                  window: "gameForm",
                  data: { mode: "add", game: INITIAL_NEW_GAME },
                }),
              );
            }}
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
    </main>
  );
};

export default LibraryPage;
