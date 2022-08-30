import { combineReducers } from "redux";
import { GamesReducer } from "./gamesReducer";
import { WindowReducer } from "./windowReducer";

export const rootReducer = combineReducers({
  games: GamesReducer,
  window: WindowReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
