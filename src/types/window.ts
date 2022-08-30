import { DefaultTheme } from "styled-components";

enum WindowSizes {
  SMALL = 0b001,
  MEDIUM = 0b010,
  LARGE = 0b100,
}

enum WindowActionTypes {
  WINDOW_SIZE_CHANGE = "WINDOW_SIZE_CHANGE",
  WINDOW_TOGGLE_MAXIMIZE = "WINDOW_TOGGLE_MAXIMIZE",
  WINDOW_SERVER_ACCESS = "WINDOW_SERVER_ACCESS",
  WINDOW_CHANGE_THEME = "WINDOW_CHANGE_THEME",
}

interface WindowSizeChange {
  type: WindowActionTypes.WINDOW_SIZE_CHANGE;
  payload: WindowSizes;
}

interface WindowToggleMaximize {
  type: WindowActionTypes.WINDOW_TOGGLE_MAXIMIZE;
  payload: boolean;
}

interface WindowServerAccess {
  type: WindowActionTypes.WINDOW_SERVER_ACCESS;
  payload: boolean;
}

interface WindowChangeTheme {
  type: WindowActionTypes.WINDOW_CHANGE_THEME;
  payload: DefaultTheme;
}

type WindowAction =
  | WindowSizeChange
  | WindowToggleMaximize
  | WindowServerAccess
  | WindowChangeTheme;

export type { WindowAction };
export { WindowSizes, WindowActionTypes };
