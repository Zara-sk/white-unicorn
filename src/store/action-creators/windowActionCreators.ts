import {
  WindowAction,
  WindowActionTypes,
  WindowSizes,
} from "../../types/window";

const toggleMaximizeWindowAction = (toggle: boolean): WindowAction => {
  return {
    type: WindowActionTypes.WINDOW_TOGGLE_MAXIMIZE,
    payload: toggle,
  };
};

const changeWindowSizeAction = (width: number): WindowAction => {
  const sizing =
    width >= 1500
      ? WindowSizes.LARGE
      : width >= 1250
      ? WindowSizes.MEDIUM
      : WindowSizes.SMALL;

  return {
    type: WindowActionTypes.WINDOW_SIZE_CHANGE,
    payload: sizing,
  };
};

export { toggleMaximizeWindowAction, changeWindowSizeAction };
