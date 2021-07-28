import { useContext, useState } from "react";
import { GameContext } from "../../store/game-context";
import { ModalContext } from "../../store/modal-context";
import classes from "./SettingsInput.module.css";

const SettingsInput = () => {
  const [game, setGame] = useContext(GameContext);
  const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

  const [tempGameState, setTempGameState] = useState(game);
  const [minIsValid, setMinIsValid] = useState(true);
  const [maxIsValid, setMaxIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const min = e.target.elements.min.value;
    const max = e.target.elements.max.value;

    if (max < min) {
      setMinIsValid(false);
    } else if (max > 20) {
      setMaxIsValid(false);
    } else {
      setGame({
        ...game,
        min: min,
        max: max,
      });
    }
    console.log(game);
    setModalIsOpen(false);
  };

  const handleUpdateMin = (e) => {
    setTempGameState({ ...tempGameState, min: e.target.value });
  };

  const handleUpdateMax = (e) => {
    setTempGameState({ ...tempGameState, max: e.target.value });
  };

  return (
    <div>
      {modalIsOpen && <div className={classes.backdrop}></div>}
      {modalIsOpen && (
        <div className={classes.wrapper}>
          {modalIsOpen && (
            <div className={classes.modal}>
              <form onSubmit={handleSubmit} className={classes.user__input}>
                <h3>Settings</h3>
                <p>Notes</p>
                <ul>
                  <li>Max must be greater than min, duh</li>
                  <li>Max is 20 for now</li>
                </ul>

                <div className={classes.user__input}>
                  <span className={classes.input__item}>
                    <label htmlFor="min">Min</label>
                    <input
                      value={tempGameState.min}
                      onChange={handleUpdateMin}
                      type="number"
                      id="min"
                    />
                    {!minIsValid && (
                      <p className={classes.error}>
                        Min must be less than max!
                      </p>
                    )}
                  </span>
                  <span className={classes.input__item}>
                    <label htmlFor="max">Max</label>
                    <input
                      value={tempGameState.max}
                      onChange={handleUpdateMax}
                      type="number"
                      id="max"
                    />
                    {!maxIsValid && (
                      <p className={classes.error}>
                        Max cannot be more than 20!
                      </p>
                    )}
                  </span>
                </div>

                <button type="submit">Go</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingsInput;
