import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";

const GameList = ({
  gamesData,
  deleteGame,
  editModalWindowToggle,
  gameFormToogle,
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
            key={game.id}
          />
        );
      })}
    </ul>
  );
};

export default GameList;
