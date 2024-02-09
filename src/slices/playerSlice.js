import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("player")
  ? JSON.parse(localStorage.getItem("player"))
  : {
      player1: true,
      computer: false,
      player2:false
    };

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: initialState,
  reducers: {
    toggleTurn: (state, action) => {
      state.player1 = !state.player1;
      state.computer = !state.computer;
      state.player2 = !state.player2;
      localStorage.setItem("player", JSON.stringify(state));
      return state;
    },
    resetPlayerState:(state,action)=>{
        state.player1 = true;
        state.computer = false;
        state.player2 = false;
        localStorage.removeItem("player");
        return state;
    }
  },
});

export const { toggleTurn , resetPlayerState } = playerSlice.actions;
export default playerSlice;
