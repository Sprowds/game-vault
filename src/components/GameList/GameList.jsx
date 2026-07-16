import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";

const GameList = ({ gamesData, deleteGame, gameFormToogle }) => {
  return (
    <ul className={classes.gameList}>
      {gamesData.map((game) => {
        return (
          <GameCard
            gameData={game}
            deleteGame={deleteGame}
            gameFormToogle={gameFormToogle}
            key={game.id}
          />
        );
      })}
    </ul>
  );
};

export default GameList;
