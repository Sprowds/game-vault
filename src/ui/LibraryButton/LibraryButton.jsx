import classes from "./LibraryButton.module.css";

const LibraryButton = ({ name, func, colorClass, type }) => {
  return (
    <button
      className={`${classes.libBtn} ${colorClass}`}
      type={type}
      onClick={func}
    >
      {name}
    </button>
  );
};

export default LibraryButton;
