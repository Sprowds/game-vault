import classes from "./FilterForm.module.css";
import { memo } from "react";

const FilterForm = memo(
  ({ filterBy, filterList, activeFilters, editFilterLibrary, itemShow }) => {
    return (
      <form className={classes.filter__form}>
        <h5 className={classes.filter__title}>By {filterBy}</h5>
        <ul className={classes.filter__list}>
          {Object.keys(filterList).map((filter) => {
            return (
              <li className={classes.filter__item} key={filter}>
                <input
                  id={filter}
                  value={filter}
                  type="checkbox"
                  checked={activeFilters.includes(filter)}
                  className={classes.filter__item_input}
                  onChange={(event) => {
                    editFilterLibrary(
                      filterBy,
                      event.target.value,
                      event.target.checked,
                    );
                  }}
                />
                <label htmlFor={filter} className={classes.filter__item_label}>
                  {itemShow(filter)}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    );
  },
);

export default FilterForm;
