import React from "react";
import classes from "./NumberCard.module.css";

const NumberCard = ({ pokemon, num, isLoading }) => {
  const pokeArr = [];
  const numStyle = `_${num}`;

  for (let i = 0; i < num; i++) {
    let imgStyle = `img__${i + 1}`;
    pokeArr.push(
      <img
        className={`${classes[imgStyle]}`}
        src={pokemon.sprite}
        alt={pokemon.name}
        key={i}
      />
    );
  }

  return (
    <div className={classes.wrapper}>
      {isLoading && (
        <div className={classes.pokeball__wrapper}>
          <div className={classes.pokeball}></div>
        </div>
      )}
      {!isLoading && (
        <>
          <h2>{pokemon.name}</h2>
          <div className={classes.number}>{num}</div>
          <div className={`${classes.images} ${classes[numStyle]}`}>
            {pokeArr}
          </div>
        </>
      )}
    </div>
  );
};

export default NumberCard;
