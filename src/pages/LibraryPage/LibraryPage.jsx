import { useState, useMemo } from "react";
import classes from "./LibraryPage.module.css";
import GameList from "../../components/GameList/GameList";
import SearchForm from "../../components/SearchForm/SearchForm";
import SortForm from "../../components/SortForm/SortForm";
import sortGamesInLibrary from "../../utils/sortGamesInLibrary";
import FilterLibrary from "../../components/FilterLibrary/FilterLibrary";
import { filterGamesLibrary, filterToggle } from "../../utils/filterLibrary";
import { useDispatch } from "react-redux";
import { addNewGame } from "../../store/librarySlice";

const LibraryPage = ({
  gameList,
  editModalWindowToggle,
  gameFormToogle,
  deleteConfirmationFormToggle,
  deleteConfirmationFormToggleHandler,
}) => {
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

  const dispatch = useDispatch();

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <div className={classes.main__content}>
        <div className={classes.library}>
          <GameList
            gamesData={readyLibrary}
            editModalWindowToggle={editModalWindowToggle}
            gameFormToogle={gameFormToogle}
            deleteConfirmationFormToggleHandler={
              deleteConfirmationFormToggleHandler
            }
          />
        </div>
        <div className={classes.interactLibrary}>
          <SearchForm editSearchString={editSearchString} />
          <button
            className={classes.addGameBtn}
            onClick={() => {
              // gameFormToogle("add");
              // editModalWindowToggle(true, "GameForm");
              dispatch(
                addNewGame({
                  name: "sosal?",
                  platform: "Steam",
                  status: "Playing",
                  rating: "5",
                  cover: "",
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
