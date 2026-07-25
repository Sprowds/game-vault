import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";

const GameList = ({
  gamesData,
  deleteGame,
  editModalWindowToggle,
  gameFormToogle,
  deleteConfirmationFormToggleHandler,
}) => {
  return (
    <ul className={classes.gameList}>
      {gamesData.map((game) => {
        return (
          <GameCard
            gameData={game}
            deleteGame={deleteGame}
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
