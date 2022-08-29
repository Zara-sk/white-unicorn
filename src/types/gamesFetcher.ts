import ILocalGame from "@models/ILocalGame";
import IServerGame from "@models/IServerGame";

enum GamesActionTypes {
  LGFP = "LOCAL_GAMES_FETCH_IN_PROGRESS",
  LGFS = "LOCAL_GAMES_FETCH_SUCCESS",
  LGFA = "LOCAL_GAMES_FETCH_ABORTED",
  SGFP = "SERVER_GAMES_FETCH_IN_PROGRESS",
  SGFS = "SERVER_GAMES_FETCH_SUCCESS",
  SGFA = "SERVER_GAMES_FETCH_ABORTED",
}

interface LocalGamesFetchInProgressAction {
  type: GamesActionTypes.LGFP;
}

interface LocalGamesFetchSuccessAction {
  type: GamesActionTypes.LGFS;
  payload: ILocalGame[];
}

interface LocalGamesFetchAbortAction {
  type: GamesActionTypes.LGFA;
  payload: string;
}

interface ServerGamesFetchInProgressAction {
  type: GamesActionTypes.SGFP;
}

interface ServerGamesFetchSuccessAction {
  type: GamesActionTypes.SGFS;
  payload: IServerGame[];
}

interface ServerGamesFetchAbortAction {
  type: GamesActionTypes.SGFA;
  payload: string;
}

type GamesAction =
  | LocalGamesFetchInProgressAction
  | LocalGamesFetchSuccessAction
  | LocalGamesFetchAbortAction
  | ServerGamesFetchInProgressAction
  | ServerGamesFetchSuccessAction
  | ServerGamesFetchAbortAction;

export type { GamesAction };
export { GamesActionTypes };
