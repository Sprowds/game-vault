import classes from "./LibraryButton.module.css";

const LibraryButton = ({ name, func, colorClass }) => {
  return (
    <button className={`${classes.libBtn} ${colorClass}`} onClick={func}>
      {name}
    </button>
  );
};

export default LibraryButton;
