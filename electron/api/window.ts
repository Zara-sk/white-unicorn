import { ipcRenderer } from "electron";

const minimize = () => {
  ipcRenderer.send("minimize");
};

const toggleMaximize = () => {
  ipcRenderer.send("toggleMaximize");
};

const subscribeOnMaximizeToggle = (f: any) => {
  ipcRenderer.on("maximizeEvent", f);
};

const close = () => {
  ipcRenderer.send("close");
};

const subscribeOnSizeChange = (f: any) => {
  ipcRenderer.on("sizeEvent", f);
};

export default {
  minimize,
  toggleMaximize,
  subscribeOnMaximizeToggle,
  close,
  subscribeOnSizeChange,
};
