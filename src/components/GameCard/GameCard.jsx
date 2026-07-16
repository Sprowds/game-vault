import classes from "./GameCard.module.css";
import starIcon from "../../assets/icon/star-icon.svg";
import Platform from "../Platform/Platform";

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
      <Platform platform={gameData.platform} />
      <p className={classes.status}>{gameData.status}</p>
      <div className={classes.rating__wrapper}>
        <img src={starIcon} className={classes.icon} alt="Star icon" />
        <p className={classes.rating} style={{ color: ratingColor }}>
          {gameData.rating.toFixed(2)}
        </p>
      </div>
      <div className={classes.interactWrapper}>
        <button
          className={classes.deleteBtn}
          onClick={() => {
            deleteGame(gameData.id);
          }}
        >
          Delete
        </button>
        <button
          className={classes.editBtn}
          onClick={() => {
            gameFormToogle(true, "edit", gameData.id);
          }}
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default GameCard;
