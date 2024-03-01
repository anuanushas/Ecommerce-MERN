import React from "react";

const InputForm = ({ name, type, id, value, setInput }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {name}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        value={value}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, [id]: e.target.value }))
        }
      />
    </div>
  );
};

export default InputForm;
