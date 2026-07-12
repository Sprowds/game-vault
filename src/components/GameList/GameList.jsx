import GameCard from "../GameCard/GameCard";
import classes from "./GameList.module.css";

const GameList = ({ gamesData }) => {
  return (
    <ul className={classes.gameList}>
      {gamesData.map((game) => {
        return <GameCard gameData={game} key={game.id} />;
      })}
    </ul>
  );
};

export default GameList;
