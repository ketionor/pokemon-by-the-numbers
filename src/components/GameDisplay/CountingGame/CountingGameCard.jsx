import { useState, useEffect, useCallback, useContext } from "react";
import getRandom from "../../../helpers/get-random";
import { GameContext } from "../../../store/game-context";
import classes from "./GameCard.module.css";
import NumberCard from "./NumberCard";

const GameCard = () => {
  const [game, setGame] = useContext(GameContext);

  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const gameStart = useCallback(async () => {
    setIsLoading(true);
    const pokemon = await fetchPokemon();
    const num = getRandom(game.countingGame.min, game.countingGame.max);
    setPokemon(pokemon);
    setNumber(num);
    setIsLoading(false);
    // setIsLoading(false);
  });

  //get a random pokemon
  const fetchPokemon = useCallback(async () => {
    const num = getRandom(1, game.global.pokeSet);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    const pokemon = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
    };
    return pokemon;
  }, [game]);

  const handleNext = () => {
    gameStart();
  };

  const handleNextKeypress = () => {
    handleNext();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleNextKeypress);
    gameStart();

    return () => {
      window.removeEventListener("keydown", handleNext);
    };
  }, []);

  return (
    <>
      <NumberCard pokemon={pokemon} num={number} isLoading={isLoading} />
      <div className={classes.pokemon}></div>

      <button onClick={handleNext} className={classes.next__button}>
        Next
      </button>
    </>
  );
};

export default GameCard;
