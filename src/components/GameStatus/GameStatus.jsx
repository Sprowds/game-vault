import statusList from "../../data/statusList.json";

const GameStatus = ({ status, className }) => {
  return (
    <p className={className} style={{ color: statusList[status].color }}>
      {status}
    </p>
  );
};

export default GameStatus;
