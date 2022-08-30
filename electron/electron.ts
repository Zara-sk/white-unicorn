import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

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
  resizable: true,
};

function createWindow() {
  mainWindow = new BrowserWindow({
    ...mainWindowSize,
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

  if (PAGE_MODE == "develop") {
    mainWindow.loadURL("http://localhost:3000/");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  }

  mainWindow.on("maximize", () => {
    mainWindow?.webContents.send("maximizeEvent", mainWindow?.isMaximized());
  });
  mainWindow.on("unmaximize", () => {
    mainWindow?.webContents.send("maximizeEvent", mainWindow?.isMaximized());
  });
  mainWindow.on("resize", () => {
    mainWindow?.webContents.send("sizeEvent", mainWindow?.getSize()[0]);
  });

  mainWindow.once("ready-to-show", () => {
    if (mainWindow != undefined) mainWindow.show();
  });

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
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
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
