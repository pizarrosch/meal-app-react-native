import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {favoritesSlice} from "./favoritesSlice";

const reducer = combineReducers({
  favoriteMeals: favoritesSlice.reducer
})
export const store = configureStore({
  reducer: reducer
})