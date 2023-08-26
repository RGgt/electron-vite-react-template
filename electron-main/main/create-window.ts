import { app, BrowserWindow } from 'electron';
import path from 'path';
import { enable } from '@electron/remote/main';

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // ! Set it to true if you do not need it to be off
      // sandbox mode turned off so code gets the permissions to work with files and
      // do other "server-side" type of things
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  enable(win.webContents);
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  // 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
  const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
}

function quit() {
  app.quit();
  win = null;
}

export { createWindow, quit };
