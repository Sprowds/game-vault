import classes from "./FilterLibrary.module.css";
import platformList from "../../data/platformList.json";
import statusList from "../../data/statusList.json";
import FilterForm from "../FilterForm/FilterForm";
import Platform from "../Platform/Platform";
import GameStatus from "../GameStatus/GameStatus";

const FilterLibrary = ({ editFilterLibrary }) => {
  const platfromShow = (platform) => <Platform platform={platform} />;

  const statusShow = (status) => <GameStatus status={status} />;
  return (
    <div className={classes.filterLibrary}>
      <h4 className={classes.title}>Filter</h4>
      <FilterForm
        filterBy="platform"
        filterList={platformList}
        editFilterLibrary={editFilterLibrary}
        itemShow={platfromShow}
      />

      <FilterForm
        filterBy="status"
        filterList={statusList}
        editFilterLibrary={editFilterLibrary}
        itemShow={statusShow}
      />
    </div>
  );
};

export default FilterLibrary;
