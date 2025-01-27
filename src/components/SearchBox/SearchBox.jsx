import css from "./SearchBox.module.css";
import { useId } from "react";
export default function SearchBox({ value, setValue }) {
  const searchId = useId();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.SearchBox}>
      <label htmlFor={searchId}>Find contacts by name: {value}</label>
      <input
        onChange={handleChange}
        id={searchId}
        type="text"
        placeholder="Search contact"
      />
    </div>
  );
}
