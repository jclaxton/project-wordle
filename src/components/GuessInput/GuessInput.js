import React from "react";

function GuessInput({ onGuess }) {
  const [value, setValue] = React.useState("");

  function onSubmit(e) {
    e.preventDefault();
    onGuess(value);
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        required={true}
        pattern={"[A-Z]{5}"}
        maxLength={5}
        onChange={(e) => {
          const upper = e.target.value.toUpperCase();
          setValue(upper);
        }}
      />
    </form>
  );
}

export default GuessInput;
