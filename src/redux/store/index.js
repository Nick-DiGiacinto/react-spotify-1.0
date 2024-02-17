import { configureStore } from "@reduxjs/toolkit";
import ReducerOfPlayer from "../reducers/ReducerOfPlayer";

const store = configureStore({
  reducer: ReducerOfPlayer,
});

export default store;
