import classes from "./SearchForm.module.css";
import { editSearchString } from "../../store/librarySlice";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      className={classes.search}
      placeholder="Search"
      onChange={(event) => {
        dispatch(editSearchString(event.target.value));
      }}
    />
  );
};

export default SearchForm;
