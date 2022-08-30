import { ipcRenderer, contextBridge } from "electron";

const WINDOW_API = {
  window: {
    minimize: () => ipcRenderer.send("minimize"),
    toggleMaximize: () => ipcRenderer.send("toggleMaximize"),
    subscribeOnMaximizeToggle: (f: any) => {
      ipcRenderer.on("maximizeEvent", f);
    },
  },
};

contextBridge.exposeInMainWorld("api", WINDOW_API);
