import {
  WindowSizes,
  WindowAction,
  WindowActionTypes,
} from "../../types/window";
import { DarkTheme } from "@themes/darkTheme";
import { DefaultTheme } from "styled-components";

interface WindowState {
  theme: DefaultTheme;
  serverAccess: boolean;
  sizing: WindowSizes;
  isMaximized: boolean;
}

const initialState: WindowState = {
  theme: DarkTheme,
  serverAccess: true,
  sizing: WindowSizes.SMALL,
  isMaximized: false,
};

export const WindowReducer = (
  state = initialState,
  action: WindowAction
): WindowState => {
  switch (action.type) {
    case WindowActionTypes.WINDOW_TOGGLE_MAXIMIZE:
      return { ...state, isMaximized: action.payload };

    case WindowActionTypes.WINDOW_SIZE_CHANGE:
      return { ...state, sizing: action.payload };

    default:
      return state;
  }
};

export {};
