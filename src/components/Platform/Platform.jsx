import classes from "./Platform.module.css";
import platformList from "../../data/platformList.json";

const Platform = ({ platform }) => {
  return (
    <p
      className={classes.platform}
      style={{ color: platformList[platform].color }}
    >
      {platform}
    </p>
  );
};

export default Platform;
