import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue("");
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="text" type="text" value={value} onChange={handleChange} />
      <input className="button_submit" type="submit" />
    </form>
  );
};