import GameCard from "./GameCard";
import classes from "./GameWindow.module.css";

const GameWindow = () => {
  return (
    <div className={classes.game__window}>
      <GameCard />
    </div>
  );
};

export default GameWindow;
