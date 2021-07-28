import { useState } from "react";

import "./App.css";
import GameWindow from "./components/GameDisplay/GameWindow";
import Header from "./components/Header/Header";
import SettingsInput from "./components/Settings/SettingsInput";
import { GameContextProvider } from "./store/game-context";
import { ModalContextProvider } from "./store/modal-context";

function App() {
  const [inputIsVisible, setInputIsVisible] = useState(true);

  return (
    <div className="App">
      <ModalContextProvider>
        <Header />
        <GameContextProvider>
          {inputIsVisible && <SettingsInput />}
          <div className="game__wrapper">
            <GameWindow />
          </div>
        </GameContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
