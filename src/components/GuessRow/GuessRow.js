import React from "react";
import GuessCell from "../GuessCell";

function GuessRow({ guess }) {
  function renderCells() {
    return Array.from(Array(5).keys()).map((columnKey) => {
      return (
        <GuessCell
          key={columnKey}
          value={guess && guess.value ? guess.value[columnKey] : ""}
        />
      );
    });
  }

  return <p className={"guess"}>{renderCells()}</p>;
}

export default GuessRow;
