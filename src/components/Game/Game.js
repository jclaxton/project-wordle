import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessTable from "../GuessTable";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function onGuess(newGuess) {
    console.log(guesses);
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      setGuesses([...guesses, { value: newGuess, key: Math.random() }]);
    }
  }

  return (
    <>
      <GuessTable guesses={guesses} />
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
