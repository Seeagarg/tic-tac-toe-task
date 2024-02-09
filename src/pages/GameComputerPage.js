import React, { useEffect, useState } from "react";
import classes from "./GameComputerPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  eightTileHandler,
  fiveTileHandler,
  fourTileHandler,
  nineTileHandler,
  oneTileHandler,
  randomTileHandler,
  sevenTileHandler,
  sixTileHandler,
  threeTileHandler,
  twoTileHandler,
} from "../slices/tilesSlice";
import { toggleTurn } from "../slices/playerSlice";
import GameOverModal from "../components/GameOverModal";
import { closeModal, openModal } from "../slices/modalSlice";

const GameComputerPage = () => {
  const dispatch = useDispatch();
  const { player1, computer } = useSelector((state) => state.playerSlice);
  const { modal } = useSelector((state) => state.modalSlice);
  const {
    oneTile,
    twoTile,
    threeTile,
    fourTile,
    fiveTile,
    sixTile,
    sevenTile,
    eightTile,
    nineTile,
  } = useSelector((state) => state.tilesSlice);
  const [winner, setWinner] = useState("");
  const [winType,setWinType]=useState("");

  const openModalHandler = () => {
    dispatch(openModal());
};

const closeModalHandler=()=>{
  setWinType("");
  dispatch(closeModal());
}

  useEffect(() => {
    if (computer) {
      setTimeout(() => {
        dispatch(toggleTurn());
        dispatch(randomTileHandler("O"));
      }, 600);
    }
  }, [
    computer,
  ]);

  useEffect(() => {
    if (oneTile == "X" && twoTile == "X" && threeTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (oneTile == "O" && twoTile == "O" && threeTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (fourTile == "X" && fiveTile == "X" && sixTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (fourTile == "O" && fiveTile == "O" && sixTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (sevenTile == "X" && eightTile == "X" && nineTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (sevenTile == "O" && eightTile == "O" && nineTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (oneTile == "X" && fourTile == "X" && sevenTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (oneTile == "O" && fourTile == "O" && sevenTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (twoTile == "X" && fiveTile == "X" && eightTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (twoTile == "O" && fiveTile == "O" && eightTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (threeTile == "X" && sixTile == "X" && nineTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (threeTile == "O" && sixTile == "O" && nineTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (oneTile == "X" && fiveTile == "X" && nineTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (oneTile == "O" && fiveTile == "O" && nineTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if (threeTile == "X" && fiveTile == "X" && sevenTile == "X") {
      setTimeout(() => {
        setWinner("Player X won the game!");
        openModalHandler();
      }, 100);
    }
    if (threeTile == "O" && fiveTile == "O" && sevenTile == "O") {
      setTimeout(() => {
        setWinner("Player O won the game!");
        openModalHandler();
      }, 100);
    }
    if(oneTile!=""&&twoTile!=""&&threeTile!=""&&fourTile!=""&&fiveTile!=""&&sixTile!=""&&sevenTile!=""&&eightTile!=""&&nineTile!=""){
      setTimeout(()=>{
        setWinner("It's a Draw !");
        setWinType("0");
        openModalHandler();
      },100)
    }
  }, [
    oneTile,
    twoTile,
    threeTile,
    fourTile,
    fiveTile,
    sixTile,
    sevenTile,
    eightTile,
    nineTile,
  ]);

  const tileClickHandler = (tile) => {
    if (tile.tile === "1") {
      if (player1) {
        if (oneTile == "") {
          dispatch(oneTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "2") {
      if (player1) {
        if (twoTile == "") {
          dispatch(twoTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "3") {
      if (player1) {
        if (threeTile == "") {
          dispatch(threeTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "4") {
      if (player1) {
        if (fourTile == "") {
          dispatch(fourTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "5") {
      if (player1) {
        if (fiveTile == "") {
          dispatch(fiveTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "6") {
      if (player1) {
        if (sixTile == "") {
          dispatch(sixTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "7") {
      if (player1) {
        if (sevenTile == "") {
          dispatch(sevenTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "8") {
      if (player1) {
        if (eightTile == "") {
          dispatch(eightTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
    if (tile.tile === "9") {
      if (player1) {
        if (nineTile == "") {
          dispatch(nineTileHandler("X"));
          dispatch(toggleTurn());
        }
      }
    }
  };
  return (
    <div className={classes.container}>

      <div className={classes.sub_container}>
      <div className={classes.game_title}>
        <h1 className={classes.title}>Tic-Tac-Toe</h1>
      </div>
     
        <div className={classes.player_turn_indicator}>
          <h1>
            {player1
              ? "Player X's Turn "
              : computer
              ? "Computer O's Turn"
              : null}
          </h1>
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
        
        <div className={classes.grid_container}>
          <div className={classes.grid}>
            <div
              className={classes.tile_one}
              onClick={() => tileClickHandler({ tile: "1" })}
            >
              {oneTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : oneTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_two}
              onClick={() => tileClickHandler({ tile: "2" })}
            >
              {twoTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : twoTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_three}
              onClick={() => tileClickHandler({ tile: "3" })}
            >
              {threeTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : threeTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_four}
              onClick={() => tileClickHandler({ tile: "4" })}
            >
              {fourTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : fourTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_five}
              onClick={() => tileClickHandler({ tile: "5" })}
            >
              {fiveTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : fiveTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_six}
              onClick={() => tileClickHandler({ tile: "6" })}
            >
              {sixTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : sixTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_seven}
              onClick={() => tileClickHandler({ tile: "7" })}
            >
              {sevenTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : sevenTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_eight}
              onClick={() => tileClickHandler({ tile: "8" })}
            >
              {eightTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : eightTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
            <div
              className={classes.tile_nine}
              onClick={() => tileClickHandler({ tile: "9" })}
            >
              {nineTile == "X" ? (
                <div style={{color:"#e8d615",fontSize:"7rem"}}>X</div>
              ) : nineTile == "O" ? (
                <div style={{color:"white",fontSize:"7rem"}}>O</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <GameOverModal winner={winner} winType={winType} closeModalHandler={closeModalHandler} path="/game-mode-singleplayer" />
      )}
    </div>
  );
};

export default GameComputerPage;
