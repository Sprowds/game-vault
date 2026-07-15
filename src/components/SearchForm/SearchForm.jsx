import classes from "./SearchForm.module.css";

const SearchForm = ({ editSearchString }) => {
  return (
    <input
      type="text"
      className={classes.search}
      placeholder="Search"
      onChange={(event) => {
        editSearchString(event.target.value);
      }}
    />
  );
};

export default SearchForm;
