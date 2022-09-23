import { app, BrowserWindow, ipcMain } from "electron";

import * as path from "path";

import storage, { STORAGE_KEYS, updateWindowPrefs } from "./storage";

const gotTheLock = app.requestSingleInstanceLock();

let mainWindow: BrowserWindow | null;
const PAGE_MODE: string | undefined = process.env.PAGE_MODE;

const mainWindowSize = {
  height: 650,
  minHeight: 650,
  width: 1100,
  minWidth: 1100,
  resizable: true,
};

const authWindowSize = {
  height: 550,
  minHeight: 550,
  width: 350,
  minWidth: 350,
  resizable: false,
};

function createWindow() {
  const windowPreferences = storage.get(STORAGE_KEYS.WINDOW);

  mainWindow = new BrowserWindow({
    ...mainWindowSize,
    ...windowPreferences.sizes,
    show: false,
    frame: false,
    backgroundColor: "#1a1a1a",

    webPreferences: {
      javascript: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (windowPreferences.isMaximized) {
    mainWindow.maximize();
  }

  if (PAGE_MODE == "develop") {
    mainWindow.loadURL("http://localhost:3000/");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  }

  mainWindow.on("move", () => {
    if (mainWindow) {
      updateWindowPrefs({ pos: mainWindow.getPosition() });
    }
  });
  mainWindow.on("maximize", () => {
    if (mainWindow) {
      updateWindowPrefs({ isM: mainWindow.isMaximized() });
      mainWindow.webContents.send("maximizeEvent", mainWindow.isMaximized());
    }
  });
  mainWindow.on("unmaximize", () => {
    if (mainWindow) {
      updateWindowPrefs({ isM: mainWindow.isMaximized() });
      mainWindow.webContents.send("maximizeEvent", mainWindow.isMaximized());
    }
  });
  mainWindow.on("resize", () => {
    if (mainWindow) {
      updateWindowPrefs({ size: mainWindow.getSize() });
      mainWindow.webContents.send("sizeEvent", mainWindow.getSize()[0]);
    }
  });

  mainWindow.once("ready-to-show", () => {
    if (mainWindow != undefined) mainWindow.show();
  });

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Не позволяем создать лишний instance
if (!gotTheLock) {
  app.quit();
} else {
  app.on(
    "second-instance",
    (event: Event, argv: string[], workingDirectory: string, data: unknown) => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore();
        }
        mainWindow.focus();
      }
    }
  );
}

app.on("ready", () => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("minimize", (event: any) => {
  mainWindow?.minimize();
});

ipcMain.on("toggleMaximize", (event: any) => {
  if (!mainWindow?.isMaximized()) {
    mainWindow?.maximize();
  } else {
    mainWindow.unmaximize();
  }
});

ipcMain.on("close", (event: any) => {
  app.quit();
});
