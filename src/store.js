import { configureStore } from '@reduxjs/toolkit';
import tilesSlice from './slices/tilesSlice';
import playerSlice from './slices/playerSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: {
    tilesSlice: tilesSlice.reducer,
    playerSlice: playerSlice.reducer,
    modalSlice:modalSlice.reducer
  },
});

export default store;
