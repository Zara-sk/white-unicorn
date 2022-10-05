import { app, BrowserWindow, ipcMain } from "electron";

import * as path from "path";

import storage, {
  STORAGE_KEYS,
  updateAuthPrefs,
  updateWindowPrefs,
} from "./storage";

const gotTheLock = app.requestSingleInstanceLock();

let authWindow: BrowserWindow | null;
let launcherWindow: BrowserWindow | null;
let currentWindow: BrowserWindow | null;

const PAGE_MODE: string | undefined = process.env.PAGE_MODE;
const CLI: string | undefined = process.env.CLI;

const launcherWindowSize = {
  height: 650,
  minHeight: 650,
  width: 1100,
  minWidth: 1100,
  resizable: true,
};

const authWindowSize = {
  height: 550,
  minHeight: 550,
  maxHeight: 550,
  width: 350,
  minWidth: 350,
  maxWidth: 350,
  resizable: false,
};

const CreateAuthWindow = () => {
  const authPreferences = storage.get(STORAGE_KEYS.AUTH);

  authWindow = new BrowserWindow({
    ...authWindowSize,
    show: false,
    frame: false,
    backgroundColor: "#1a1a1a",
    icon: path.join(__dirname, "unicorn-white.ico"),

    webPreferences: {
      javascript: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  currentWindow = authWindow;

  if (PAGE_MODE == "development") {
    authWindow.loadURL("http://localhost:3000/");
  } else {
    authWindow.loadFile(path.join(__dirname, "./auth.html"));
  }

  authWindow.once("ready-to-show", () => {
    if (authWindow != undefined) authWindow.show();
  });

  authWindow.webContents.openDevTools();

  authWindow.on("closed", () => {
    authWindow = null;
  });
};

const createLauncherWindow = () => {
  const windowPreferences = storage.get(STORAGE_KEYS.WINDOW);
  const authPreferences = storage.get(STORAGE_KEYS.AUTH);

  launcherWindow = new BrowserWindow({
    ...launcherWindowSize,
    ...windowPreferences.sizes,
    show: false,
    frame: false,
    backgroundColor: "#1a1a1a",
    icon: path.join(__dirname, "unicorn-white.ico"),

    webPreferences: {
      javascript: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  currentWindow = launcherWindow;

  if (windowPreferences.isMaximized) {
    launcherWindow.maximize();
  }

  if (PAGE_MODE == "development") {
    launcherWindow.loadURL("http://localhost:3000/");
  } else {
    launcherWindow.loadFile(path.join(__dirname, "./launcher.html"));
  }

  launcherWindow.on("move", () => {
    if (launcherWindow) {
      updateWindowPrefs({ pos: launcherWindow.getPosition() });
    }
  });
  launcherWindow.on("maximize", () => {
    if (launcherWindow) {
      updateWindowPrefs({ isM: launcherWindow.isMaximized() });
      launcherWindow.webContents.send(
        "maximizeEvent",
        launcherWindow.isMaximized()
      );
    }
  });
  launcherWindow.on("unmaximize", () => {
    if (launcherWindow) {
      updateWindowPrefs({ isM: launcherWindow.isMaximized() });
      launcherWindow.webContents.send(
        "maximizeEvent",
        launcherWindow.isMaximized()
      );
    }
  });
  launcherWindow.on("resize", () => {
    if (launcherWindow) {
      updateWindowPrefs({ size: launcherWindow.getSize() });
      launcherWindow.webContents.send("sizeEvent", launcherWindow.getSize()[0]);
    }
  });

  launcherWindow.once("ready-to-show", () => {
    if (launcherWindow != undefined) launcherWindow.show();
  });

  launcherWindow.webContents.openDevTools();

  launcherWindow.on("closed", () => {
    launcherWindow = null;
  });
};

// Не позволяем создать лишний instance
if (!gotTheLock) {
  app.quit();
} else {
  app.on(
    "second-instance",
    (event: Event, argv: string[], workingDirectory: string, data: unknown) => {
      if (launcherWindow) {
        if (launcherWindow.isMinimized()) {
          launcherWindow.restore();
        }
        launcherWindow.focus();
      } else if (authWindow) {
        if (authWindow.isMinimized()) {
          authWindow.restore();
        }
        authWindow.focus();
      }
    }
  );
}

app.on("ready", () => {
  if (CLI == "launcher") {
    createLauncherWindow();
  } else {
    CreateAuthWindow();
  }
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0)
      if (CLI == "launcher") {
        createLauncherWindow();
      } else {
        CreateAuthWindow();
      }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("minimize", (event: any) => {
  currentWindow?.minimize();
});

ipcMain.on("toggleMaximize", (event: any) => {
  if (!currentWindow?.isMaximized()) {
    currentWindow?.maximize();
  } else {
    currentWindow.unmaximize();
  }
});

ipcMain.on("close", (event: any) => {
  app.quit();
});

ipcMain.on("auth:setPrefs", (event: any, payload: AuthPayload) => {
  if (payload.token) {
    updateAuthPrefs({
      login: payload.email,
      password: payload.password,
      token: payload.token,
    });
  }
});

ipcMain.on("launcher:start", (event: any) => {
  if (authWindow) {
    authWindow.close();
    createLauncherWindow();
  }
});
