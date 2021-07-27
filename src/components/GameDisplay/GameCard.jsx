import { useState, useEffect, useCallback, useContext } from "react";
import { GameContext } from "../../store/game-context";
import classes from "./GameCard.module.css";

const GameCard = () => {
  const [pokemon, setPokemon] = useState({ pokeData: {}, pokeArr: [] });
  const [game, setGame] = useContext(GameContext);

  const pokeSet = 150;

  const getRand = useCallback((min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  const gameSetup = async () => {
    console.log("setting up");
    const pokeData = await fetchPokemon(pokeSet);
    const num = getRand(game.min, game.max);
    const pokeArr = [];

    for (let i = 0; i < num; i++) {
      pokeArr.push(<img src={pokeData.sprite} alt="" />);
    }

    setPokemon({ ...pokemon, pokeData: pokeData, pokeArr: pokeArr });
  };

  //get a random pokemon
  const fetchPokemon = async (pokeSet) => {
    const pokemon = getRand(1, pokeSet);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    const pokeData = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
    };
    return pokeData;
  };

  const handleStartGame = () => {
    if (game.status === 0) {
      setGame({ ...game, status: 1 });
    }

    gameSetup();
  };

  return (
    <>
      <h2>{pokemon.pokeData.name}</h2>
      <div className={classes.pokemon}>{pokemon.pokeArr}</div>
      {game.status === 0 ? (
        <button onClick={handleStartGame} className={classes.start__button}>
          Start
        </button>
      ) : (
        <button onClick={handleStartGame} className={classes.next__button}>
          Next
        </button>
      )}
    </>
  );
};

export default GameCard;
