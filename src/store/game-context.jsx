import React, { createContext, useState } from "react";

export const GameContext = createContext({ min: 1, max: 10 });

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    chosenGame: "COUNTING",
    min: 1,
    max: 10,
    status: 0,
    score: 0,
  });

  return (
    <GameContext.Provider value={[game, setGame]}>
      {children}
    </GameContext.Provider>
  );
};
