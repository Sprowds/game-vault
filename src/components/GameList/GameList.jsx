import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { filterGamesLibrary } from "../../utils/filterLibrary";
import sortGamesInLibrary from "../../utils/sortGamesInLibrary";

const GameList = () => {
  const gameList = useSelector((state) => state.library.gameList);
  const search = useSelector((state) => state.library.searchString);
  const sort = useSelector((state) => state.library.sortLibraryBy);
  const filterLibrary = useSelector((state) => state.library.filterLibrary);

  const readyLibrary = useMemo(() => {
    return filterGamesLibrary(
      sortGamesInLibrary(gameList, sort),
      search,
      filterLibrary,
    );
  }, [gameList, sort, filterLibrary, search]);

  return (
    <ul className={classes.gameList}>
      {readyLibrary.map((game) => {
        return <GameCard gameData={game} key={game.id} />;
      })}
    </ul>
  );
};

export default GameList;
