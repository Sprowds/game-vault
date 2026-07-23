import classes from "./Platform.module.css";
import platformList from "../../data/platformList.json";

const Platform = ({ platform, className }) => {
  return (
    <p
      className={`${classes.platform} ${className}`}
      style={{ color: platformList[platform].color }}
    >
      {platform}
    </p>
  );
};

export default Platform;
