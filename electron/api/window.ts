import { ipcRenderer } from "electron";

const minimize = () => {
  ipcRenderer.send("minimize");
};

const toggleMaximize = () => {
  ipcRenderer.send("toggleMaximize");
};

const subscribeOnMaximizeToggle = (f: subscribeFunction) => {
  ipcRenderer.on("maximizeEvent", f);
};

const close = () => {
  ipcRenderer.send("close");
};

const subscribeOnSizeChange = (f: subscribeFunction) => {
  ipcRenderer.on("sizeEvent", f);
};

export default {
  minimize,
  toggleMaximize,
  close,
  subscribeOnMaximizeToggle,
  subscribeOnSizeChange,
};
