import React from "react";
import GuessRow from "../GuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessTable({ guesses }) {
  function validateGuess(guess) {
    return { ...guess };
  }

  function renderGuesses() {
    return Array.from(Array(NUM_OF_GUESSES_ALLOWED).keys()).map((rowKey) => {
      const guessString = guesses[rowKey] ? guesses[rowKey] : "";
      return <GuessRow key={rowKey} guess={validateGuess(guessString)} />;
    });
  }

  return <div className="guess-results">{renderGuesses()}</div>;
}

export default GuessTable;
