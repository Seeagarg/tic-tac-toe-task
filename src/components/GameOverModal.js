import React from "react";
import classes from "./GameOverModal.module.css";
import { useDispatch } from "react-redux";
import { resetPlayerState } from "../slices/playerSlice";
import { resetTilesState } from "../slices/tilesSlice";
import { useNavigate } from "react-router-dom";

const GameOverModal = ({ winner, winType, closeModalHandler, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    closeModalHandler();
    dispatch(resetPlayerState());
    dispatch(resetTilesState());
    navigate(path);
  };
  return (
    <div className={classes.container}>
      <div className={classes.sub_container}>
        <div className={classes.modal_img_container}>
          {winType == "0" ? (
            <img
              className={classes.modal_img}
              src="/assets/images/game_over.png"
              alt="result"
            />
          ) : (
            <img
              className={classes.modal_img}
              src="/assets/images/happy.png"
              alt="result"
            />
          )}
        </div>
        <div className={classes.modal_description}>
          <h1>{winType == "0" ? "Draw!" : "Congratulations!"}</h1>
          <p>{winner}</p>
        </div>
        <div className={classes.buttons_container}>
          <button
            type="button"
            className={classes.play_btn}
            onClick={() => navigateHandler(path)}
          >
            Play Again!
          </button>
          <button
            type="button"
            className={classes.back_btn}
            onClick={() => navigateHandler("/")}
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
