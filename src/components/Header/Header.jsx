import { useContext } from "react";
import { GameContext } from "../../store/game-context";
import { ModalContext } from "../../store/modal-context";
import classes from "./Header.module.css";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useContext(ModalContext);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className={classes.header}>
      <h1>Pokemon by the Numbers</h1>
      <button onClick={handleOpenModal}>Settings</button>
    </div>
  );
};

export default Header;
