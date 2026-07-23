import classes from "./FilterForm.module.css";

const FilterForm = ({ filterBy, filterList, editFilterLibrary, itemShow }) => {
  return (
    <form
      className={classes.filter__form}
      onChange={(event) => {
        editFilterLibrary(filterBy, event.target.value);
      }}
    >
      <h5 className={classes.filter__title}>By {filterBy}</h5>
      <ul className={classes.filter__list}>
        {Object.keys(filterList).map((filter) => {
          return (
            <li className={classes.filter__item} key={filter}>
              <input
                id={filter}
                value={filter}
                type="checkbox"
                className={classes.filter__item_input}
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
};

export default FilterForm;
