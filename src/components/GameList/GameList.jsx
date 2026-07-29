import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { filterGamesLibrary } from "../../utils/filterLibrary";
import sortGamesInLibrary from "../../utils/sortGamesInLibrary";

const GameList = ({ sortLibraryBy, search, filterLibrary }) => {
  const gameList = useSelector((state) => state.library.gameList);

  const readyLibrary = useMemo(() => {
    return filterGamesLibrary(
      sortGamesInLibrary(gameList, sortLibraryBy),
      search,
      filterLibrary,
    );
  }, [gameList, sortLibraryBy, filterLibrary, search]);
  return (
    <ul className={classes.gameList}>
      {readyLibrary.map((game) => {
        return <GameCard gameData={game} key={game.id} />;
      })}
    </ul>
  );
};

export default GameList;
