import React from "react";

const GlobalSettings = ({ tempGameState, setTempGameState }) => {
  const handleChangeGlobal = (e) => {
    setTempGameState({ ...tempGameState, pokeSet: e.target.value });
  };

  return (
    <div>
      <h3>Global Settings</h3>
      <select
        onChange={handleChangeGlobal}
        name="generation"
        id=""
        value={tempGameState.pokeSet}
      >
        <option value="151">Generation One</option>
        <option value="251">Generation Two</option>
        <option value="386">Generation Three</option>
        <option value="493">Generation Four</option>
        <option value="649">Generation Five</option>
        <option value="721">Generation Six</option>
        <option value="809">Generation Seven</option>
        <option value="898">Generation Eight</option>
      </select>
    </div>
  );
};

export default GlobalSettings;
