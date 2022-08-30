import { WindowActionTypes } from "../types/window";

import store from "@store";

window.api.window.subscribeOnMaximizeToggle(
  (event: any, isMaximized: boolean) => {
    store.dispatch({
      type: WindowActionTypes.WINDOW_TOGGLE_MAXIMIZE,
      payload: isMaximized,
    });
  }
);

export default {
  minimizeWindow: () => {
    window.api.window.minimize();
  },
  toggleMaximizeWindow: () => {
    window.api.window.toggleMaximize();
  },
};
