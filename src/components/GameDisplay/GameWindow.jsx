import { useContext } from "react";
import { GameContext } from "../../store/game-context";
import CountingGameCard from "./CountingGame/CountingGameCard";
import { Route, Switch, Link } from "react-router-dom";
import LetterGameCard from "./AbcGame/LetterGameCard";
import classes from "./GameWindow.module.css";

const GameWindow = () => {
  // const [game, setGame] = useContext(GameContext);

  return (
    <div className={classes.game__window}>
      <Switch>
        <Route path="/counting" component={CountingGameCard} />
        <Route path="/letters" component={LetterGameCard} />
      </Switch>
    </div>
  );
};

export default GameWindow;
