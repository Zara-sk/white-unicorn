import ILocalGame from "@models/ILocalGame";
import IServerGame from "@models/IServerGame";
import { GamesActionTypes, GamesAction } from "../../types/gamesFetcher";

interface GamesState {
  localGames: ILocalGame[];
  serverGames: IServerGame[];
  isLoading: boolean;
  localError: string | null;
  serverError: string | null;
}

const initialState: GamesState = {
  localGames: [],
  serverGames: [],
  isLoading: false,
  localError: null,
  serverError: null,
};

export const GamesReducer = (
  state = initialState,
  action: GamesAction
): GamesState => {
  switch (action.type) {
    case GamesActionTypes.LGFP:
      return { ...state, isLoading: true };

    case GamesActionTypes.LGFS:
      return { ...state, isLoading: false, localGames: action.payload };

    case GamesActionTypes.LGFA:
      return { ...state, isLoading: false, localError: action.payload };

    case GamesActionTypes.SGFP:
      return { ...state, isLoading: false };

    case GamesActionTypes.SGFS:
      return { ...state, isLoading: false, serverGames: action.payload };

    case GamesActionTypes.SGFA:
      return { ...state, isLoading: false, serverError: action.payload };

    default:
      return state;
  }
};
