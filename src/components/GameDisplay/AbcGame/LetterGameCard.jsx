import React, { useState, useEffect, useContext, useCallback } from "react";
import { GameContext } from "../../../store/game-context";

import classes from "./LetterGameCard.module.css";

const LetterGameCard = () => {
  const [game, setGame] = useContext(GameContext);
  const [letterGameType, setLetterGameType] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    sprite: "",
    letter: "",
  });
  const pokeSet = 150;

  const getRand = useCallback((min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  //Get a random pokemon, display a picture of that pokemon and it's first letter
  const fetchPokemon = async () => {
    const num = getRand(1, game.pokeSet);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    const pokemon = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
      letter: data.name[0],
    };
    setPokemon(pokemon);
  };

  const handleStart = (gameType) => {
    console.log(gameType);
    setLetterGameType(gameType);
    console.log(letterGameType);
    fetchPokemon(pokeSet);
  };

  const handleNext = () => {
    fetchPokemon(pokeSet);
  };

  const handleNextKeypress = (event) => {
    if (event.code === "Space") {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleNextKeypress);
  }, []);

  const gameTypeButtons = (
    <>
      <button
        onClick={() => {
          handleStart("lower");
        }}
      >
        lower case
      </button>
      <button
        onClick={() => {
          handleStart("upper");
        }}
      >
        UPPER CASE
      </button>
    </>
  );

  return (
    <div className={classes.wrapper}>
      <h2>{pokemon.name}</h2>
      <div className={classes.letter}>
        <h3>
          {letterGameType === "lower"
            ? pokemon.letter.toLowerCase()
            : pokemon.letter.toUpperCase()}
        </h3>
        <img src={pokemon.sprite} alt="" />
      </div>
      {letterGameType === "" ? (
        gameTypeButtons
      ) : (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default LetterGameCard;
