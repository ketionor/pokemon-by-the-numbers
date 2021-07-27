import { useState } from "react";

import "./App.css";
import GameWindow from "./components/GameDisplay/GameWindow";
import Header from "./components/Header/Header";
import SettingsInput from "./components/Settings/SettingsInput";
import { GameContextProvider } from "./store/game-context";

function App() {
  const [inputIsVisible, setInputIsVisible] = useState(true);

  return (
    <div className="App">
      <Header />
      <GameContextProvider>
        {inputIsVisible && <SettingsInput />}
        <div className="game__wrapper">
          <GameWindow />
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
