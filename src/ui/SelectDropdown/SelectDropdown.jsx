import classes from "./SelectDropdown.module.css";

const SelectDropdown = ({ value, name, options, onChange }) => {
  return (
    <select
      value={value}
      id={name}
      name={name}
      className={classes.list}
      onChange={onChange}
    >
      {options.map((option) => {
        return (
          <option value={option} className={classes.item} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectDropdown;
