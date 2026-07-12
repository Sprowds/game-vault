import classes from "./SearchForm.module.css";

const SearchForm = ({ setSearch }) => {
  return (
    <input
      type="text"
      className={classes.search}
      placeholder="Search"
      onChange={(event) => {
        setSearch(event.target.value.toUpperCase().trim());
      }}
    />
  );
};

export default SearchForm;
