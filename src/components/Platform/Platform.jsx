import platformList from "../../data/platformList.json";

const Platform = ({ platform, className }) => {
  return (
    <p className={className} style={{ color: platformList[platform].color }}>
      {platform}
    </p>
  );
};

export default Platform;
