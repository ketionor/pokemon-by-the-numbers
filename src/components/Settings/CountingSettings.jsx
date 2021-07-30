import React, { useState } from "react";
import classes from "./CountingSettings.module.css";

const CountingSettings = ({
  tempGameStateCounting,
  setTempGameStateCounting,
}) => {
  const [minIsValid, setMinIsValid] = useState(true);
  const [maxIsValid, setMaxIsValid] = useState(true);

  const handleUpdateMin = (e) => {
    console.log(tempGameStateCounting);
    if (e.target.value > tempGameStateCounting.max) {
      setMinIsValid(false);
    } else {
      setTempGameStateCounting({
        ...tempGameStateCounting,
        min: e.target.value,
      });
    }
  };

  const handleUpdateMax = (e) => {
    if (e.target.value > 10) {
      setMaxIsValid(false);
    } else {
      setTempGameStateCounting({
        ...tempGameStateCounting,
        max: e.target.value,
      });
    }
  };

  return (
    <>
      <h3>Counting Game Settings</h3>
      <div className={classes.user__input}>
        <span className={classes.input__item}>
          <label htmlFor="min">Min</label>
          <input
            value={tempGameStateCounting.min}
            onChange={handleUpdateMin}
            type="number"
            id="min"
          />
          {!minIsValid && (
            <p className={classes.error}>Min must be less than max!</p>
          )}
        </span>
        <span className={classes.input__item}>
          <label htmlFor="max">Max</label>
          <input
            value={tempGameStateCounting.max}
            onChange={handleUpdateMax}
            type="number"
            id="max"
          />
          {!maxIsValid && (
            <p className={classes.error}>Max cannot be more than 20!</p>
          )}
        </span>
      </div>
    </>
  );
};

export default CountingSettings;
