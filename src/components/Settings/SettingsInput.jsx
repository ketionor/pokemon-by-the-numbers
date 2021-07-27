import { useContext, useState } from "react";
import { GameContext } from "../../store/game-context";
import classes from "./SettingsInput.module.css";

const SettingsInput = () => {
  const [game, setGame] = useContext(GameContext);
  const [tempGameState, setTempGameState] = useState(game);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      min: e.target.elements.min.value,
      max: e.target.elements.max.value,
    };
    setGame(formData);
  };

  const handleUpdateMin = (e) => {
    setTempGameState({ ...tempGameState, min: e.target.value });
  };

  const handleUpdateMax = (e) => {
    setTempGameState({ ...tempGameState, max: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.user__input}>
        <span className={classes.input__item}>
          <label htmlFor="min">Min</label>
          <input
            value={tempGameState.min}
            onChange={handleUpdateMin}
            type="number"
            id="min"
          />
        </span>
        <span className={classes.input__item}>
          <label htmlFor="max">Max</label>
          <input
            value={tempGameState.max}
            onChange={handleUpdateMax}
            type="number"
            id="max"
          />
        </span>
        <button type="submit">Go</button>
      </form>
    </>
  );
};

export default SettingsInput;
