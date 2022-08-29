import { combineReducers } from "redux";
import { GamesReducer } from "./gamesReducer";

export const rootReducer = combineReducers({
  games: GamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
