import classes from "./FilterForm.module.css";
import platformList from "../../data/platformList.json";
import statusList from "../../data/statusList.json";
import { useState } from "react";
import { filterToggle } from "../../utils/filterLibrary";

const FilterForm = () => {
  const [filterArray, setFilterArray] = useState([]);
  return (
    <form
      className={classes.filterForm}
      onChange={(event) => {
        filterToggle(event.target.value, setFilterArray);
      }}
    >
      <h4 className={classes.title}>Filter</h4>
      <div className={classes.filter__wrapper}>
        <h5 className={classes.filter__title}>By platform</h5>
        <ul className={classes.filter__list}>
          {Object.keys(platformList).map((platform) => {
            return (
              <li className={classes.filter__item} key={platform}>
                <input
                  id={platform}
                  value={platform}
                  type="checkbox"
                  className={classes.filter__item_input}
                />
                <label
                  htmlFor={platform}
                  className={classes.filter__item_label}
                >
                  {platform}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={classes.filter__wrapper}>
        <h5 className={classes.filter__title}>By status</h5>
        <ul className={classes.filter__list}>
          {Object.keys(statusList).map((status) => {
            return (
              <li className={classes.filter__item} key={status}>
                <input
                  id={status}
                  value={status}
                  type="checkbox"
                  className={classes.filter__item_input}
                />
                <label htmlFor={status} className={classes.filter__item_label}>
                  {status}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

export default FilterForm;
