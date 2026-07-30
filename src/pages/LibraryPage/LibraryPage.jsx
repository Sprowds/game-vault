import classes from "./LibraryPage.module.css";
import GameList from "../../components/GameList/GameList";
import SearchForm from "../../components/SearchForm/SearchForm";
import SortForm from "../../components/SortForm/SortForm";
import FilterLibrary from "../../components/FilterLibrary/FilterLibrary";
import { useDispatch } from "react-redux";
import { openLibraryModal } from "../../store/librarySlice";
import INITIAL_NEW_GAME from "../../utils/INITIAL_NEW_GAME";

const LibraryPage = () => {
  const dispatch = useDispatch();

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Library</h1>
      <div className={classes.main__content}>
        <div className={classes.library}>
          <GameList />
        </div>
        <div className={classes.interactLibrary}>
          <SearchForm />
          <button
            className={classes.addGameBtn}
            onClick={() => {
              dispatch(
                openLibraryModal({
                  isOpen: true,
                  modalType: "gameForm",
                  data: { mode: "add", game: INITIAL_NEW_GAME },
                }),
              );
            }}
          >
            Add game
          </button>
          <SortForm />
          <FilterLibrary />
        </div>
      </div>
    </main>
  );
};

export default LibraryPage;
