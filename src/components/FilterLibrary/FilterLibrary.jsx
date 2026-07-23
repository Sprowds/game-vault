import classes from "./FilterLibrary.module.css";
import platformList from "../../data/platformList.json";
import statusList from "../../data/statusList.json";
import FilterForm from "../FilterForm/FilterForm";
import Platform from "../Platform/Platform";
import GameStatus from "../GameStatus/GameStatus";
import { useCallback } from "react";

const FilterLibrary = ({ filterLibrary, editFilterLibrary }) => {
  const platformShow = useCallback(
    (platform) => <Platform platform={platform} />,
    [],
  );

  const statusShow = useCallback(
    (status) => <GameStatus status={status} />,
    [],
  );
  return (
    <div className={classes.filterLibrary}>
      <h4 className={classes.title}>Filter</h4>
      <FilterForm
        filterBy="platform"
        filterList={platformList}
        activeFilters={filterLibrary.platform}
        editFilterLibrary={editFilterLibrary}
        itemShow={platformShow}
      />

      <FilterForm
        filterBy="status"
        filterList={statusList}
        activeFilters={filterLibrary.status}
        editFilterLibrary={editFilterLibrary}
        itemShow={statusShow}
      />
    </div>
  );
};

export default FilterLibrary;
