import { WindowAction, WindowActionTypes } from "../../types/window";

const toggleMaximizeWindowAction = (toggle: boolean) => {
  return {
    type: WindowActionTypes.WINDOW_TOGGLE_MAXIMIZE,
    payload: toggle,
  };
};

export { toggleMaximizeWindowAction };
