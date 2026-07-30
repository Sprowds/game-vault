import classes from "./SortForm.module.css";
import { editSortLibraryBy } from "../../store/librarySlice";
import { useDispatch, useSelector } from "react-redux";

const SortForm = () => {
  const dispatch = useDispatch();

  const currentSort = useSelector((state) => state.library.sortLibraryBy);

  return (
    <form
      className={classes.sortForm}
      onChange={(event) => {
        dispatch(editSortLibraryBy(event.target.value));
      }}
    >
      <h4 className={classes.title}>Sort:</h4>
      <div className={classes.criterion}>
        <input
          id="sortByName"
          value="name"
          type="radio"
          name="sort"
          className={classes.criterion}
          checked={currentSort === "name"}
        />
        <label htmlFor="sortByName" className={classes.criterion__title}>
          By name
        </label>
      </div>
      <div className={classes.criterion}>
        <input
          id="sortByRating"
          value="rating"
          type="radio"
          name="sort"
          className={classes.criterion}
          checked={currentSort === "rating"}
        />
        <label htmlFor="sortByRating" className={classes.criterion__title}>
          By rating<span>(best first)</span>
        </label>
      </div>
    </form>
  );
};

export default SortForm;
