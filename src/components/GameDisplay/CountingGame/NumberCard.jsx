import React from "react";
import classes from "./NumberCard.module.css";

const NumberCard = ({ pokemon, num }) => {
  const pokeArr = [];

  const renderPokemon = (i) => {
    let timeToRender = 250 * i;

    // setTimeout(() => {
    //   pokeArr.push(
    //     <img
    //       id={num}
    //       src={pokemon.sprite}
    //       alt={pokemon.name}
    //       // className={classes.showSprite}
    //     />
    //   );
    //   //   document.getElementById(num).classList.add("showSprite");
    // }, timeToRender);
  };

  for (let i = 0; i < num; i++) {
    // renderPokemon(i);

    pokeArr.push(
      <img
        id={num}
        src={pokemon.sprite}
        alt={pokemon.name}
        // className={classes.showSprite}
      />
    );
  }

  return (
    <div className={classes.wrapper}>
      <h2>{pokemon.name}</h2>
      <div className={classes.number}>{num}</div>
      <div className={classes.images}>{pokeArr}</div>
    </div>
  );
};

export default NumberCard;
