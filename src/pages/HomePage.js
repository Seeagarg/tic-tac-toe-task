import React from "react";
import classes from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPlayerState } from "../slices/playerSlice";
import { resetTilesState } from "../slices/tilesSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const navigateHandler = (path) => {
    dispatch(resetPlayerState());
    dispatch(resetTilesState());
    navigate(path);
  };
  return (
    <div className={classes.container}>
      <div className={classes.game_title}>
        <h1 className={classes.title}>Tic-Tac-Toe</h1>
      </div>
      <div className={classes.x_img_container}>
        <img
          src="/assets/images/bg_x.png"
          alt="X mark"
          className={classes.x_img}
        />
      </div>
      <div className={classes.circle_img_container}>
        <img
          src="/assets/images/bg_circle.png"
          alt="Circle mark"
          className={classes.circle_img}
        />
      </div>
     
      <div className={classes.game_mode_container}>
        <button
          className={classes.multiplayer_btn}
          onClick={() => navigateHandler("/game-mode-multiplayer")}
        >
          2 Players
        </button>
        <button
          className={classes.computer_btn}
          onClick={() => navigateHandler("/game-mode-singleplayer")}
        >
          1 Player
        </button>
      </div>
    </div>
  );
};

export default HomePage;
