import { app, BrowserWindow, ipcMain } from 'electron';
import { createWindow, quit } from './create-window';
import { setEnv } from './set-env';
import { initialize } from '@electron/remote/main';

setEnv();

initialize();

app.on('window-all-closed', () => {
  quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on('message', (_event, message) => {
  console.log(message);
});
