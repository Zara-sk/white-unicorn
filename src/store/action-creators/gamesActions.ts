import { Dispatch } from "redux";
import { GamesAction, GamesActionTypes } from "../../types/gamesFetcher";

const fetchLocalGames = () => {
  return async (dispatch: Dispatch<GamesAction>) => {
    try {
      dispatch({ type: GamesActionTypes.LGFP });
    } catch (e) {
      dispatch({
        type: GamesActionTypes.LGFA,
        payload: "Ошибка загрузки списка локально установленных игр",
      });
    }
  };
};

const fetchServerGames = () => {
  return async (dispatch: Dispatch<GamesAction>) => {
    try {
      dispatch({ type: GamesActionTypes.SGFP });
    } catch (e) {
      dispatch({
        type: GamesActionTypes.SGFA,
        payload: "Ошибка доступа к серверу",
      });
    }
  };
};

export { fetchLocalGames, fetchServerGames };
