import { WindowActionTypes } from "../types/window";

import store from "@store";
import {
  toggleMaximizeWindowAction,
  changeWindowSizeAction,
} from "@store/action-creators/windowActionCreators";

window.api.window.subscribeOnMaximizeToggle(
  (event: any, isMaximized: boolean) => {
    store.dispatch(toggleMaximizeWindowAction(isMaximized));
  }
);

window.api.window.subscribeOnSizeChange((event: any, width: number) => {
  store.dispatch(changeWindowSizeAction(width));
});

export default {
  minimizeWindow: () => {
    window.api.window.minimize();
  },
  toggleMaximizeWindow: () => {
    window.api.window.toggleMaximize();
  },
  closeWindow: () => {
    window.api.window.close();
  },
};
