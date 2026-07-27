import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";
import { useSelector } from "react-redux";

const GameList = ({
  gamesData,
  editModalWindowToggle,
  gameFormToogle,
  deleteConfirmationFormToggleHandler,
}) => {
  const gameList = useSelector((state) => state.library.gameList);
  return (
    <ul className={classes.gameList}>
      {gameList.map((game) => {
        return (
          <GameCard
            gameData={game}
            editModalWindowToggle={editModalWindowToggle}
            gameFormToogle={gameFormToogle}
            deleteConfirmationFormToggleHandler={
              deleteConfirmationFormToggleHandler
            }
            key={game.id}
          />
        );
      })}
    </ul>
  );
};

export default GameList;
