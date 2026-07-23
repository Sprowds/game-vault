import classes from "./GameCard.module.css";
import starIcon from "../../assets/icon/star-icon.svg";
import Platform from "../Platform/Platform";
import LibraryButton from "../../ui/LibraryButton/LibraryButton";
import GameStatus from "../GameStatus/GameStatus";

const GameCard = ({ gameData, deleteGame, gameFormToogle }) => {
  let ratingColor;
  if (gameData.rating >= 4) ratingColor = "#33ff00";
  else if (gameData.rating >= 3) ratingColor = "#fff239";
  else ratingColor = "#ff0a0a";

  return (
    <li className={classes.item}>
      <img
        src={gameData.cover}
        alt={`${gameData.name} cover`}
        className={classes.cover}
      />
      <h3 className={classes.title}>{gameData.name}</h3>
      <Platform platform={gameData.platform} className={classes.platform} />
      <GameStatus status={gameData.status} className={classes.status} />
      <div className={classes.rating__wrapper}>
        <img src={starIcon} className={classes.icon} alt="Star icon" />
        <p className={classes.rating} style={{ color: ratingColor }}>
          {gameData.rating.toFixed(2)}
        </p>
      </div>
      <div className={classes.interactWrapper}>
        <LibraryButton
          name="Delete"
          func={() => deleteGame(gameData.id)}
          colorClass={classes.deleteBtn}
        />
        <LibraryButton
          name="Edit"
          func={() => gameFormToogle(true, "edit", gameData.id)}
          colorClass={classes.editBtn}
        />
      </div>
    </li>
  );
};

export default GameCard;
