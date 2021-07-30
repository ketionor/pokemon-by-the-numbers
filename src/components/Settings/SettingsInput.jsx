import { useContext, useState } from "react";
import { GameContext } from "../../store/game-context";
import { ModalContext } from "../../store/modal-context";
import CountingSettings from "./CountingSettings";
import GlobalSettings from "./GlobalSettings";
import classes from "./SettingsInput.module.css";

const SettingsInput = () => {
  const [game, setGame] = useContext(GameContext);
  const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

  const [tempGameStateCounting, setTempGameStateCounting] = useState({
    min: 1,
    max: 10,
  });
  const [tempGameStateGlobal, setTempGameStateGlobal] = useState({
    pokeSet: 151,
  });

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    setGame({
      ...game,
      countingGame: tempGameStateCounting,
      global: tempGameStateGlobal,
    });

    setModalIsOpen(false);
  };

  const handleExit = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {modalIsOpen && (
        <>
          <div className={classes.backdrop}></div>
          <div className={classes.wrapper}>
            <div className={classes.modal}>
              <h2>Settings</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                onClick={handleExit}
                className={classes.x}
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
              <form onSubmit={handleSubmit}>
                <GlobalSettings
                  tempGameState={tempGameStateGlobal}
                  setTempGameState={setTempGameStateGlobal}
                />
                <CountingSettings
                  tempGameStateCounting={tempGameStateCounting}
                  setTempGameStateCounting={setTempGameStateCounting}
                />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsInput;
