import { useState, useEffect, useCallback, useContext } from "react";
import getRandom from "../../../helpers/get-random";
import { GameContext } from "../../../store/game-context";
import classes from "./GameCard.module.css";
import NumberCard from "./NumberCard";

const GameCard = () => {
  const [game, setGame] = useContext(GameContext);

  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  const gameStart = useCallback(async () => {
    const pokemon = await fetchPokemon();
    const num = getRandom(game.min, game.max);

    setPokemon(pokemon);
    setNumber(num);
    console.log(game, num);
  });

  //get a random pokemon
  const fetchPokemon = useCallback(async () => {
    const num = getRandom(1, game.pokeSet);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    const pokemon = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
    };
    return pokemon;
  }, [game]);

  const handleNext = () => {
    console.log("next");
    gameStart();
  };

  const handleNextKeypress = () => {
    handleNext();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleNextKeypress);
    gameStart();
  }, []);

  return (
    <>
      <NumberCard pokemon={pokemon} num={number} />
      <div className={classes.pokemon}></div>

      <button onClick={handleNext} className={classes.next__button}>
        Next
      </button>
    </>
  );
};

export default GameCard;
