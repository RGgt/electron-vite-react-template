import { app, BrowserWindow, ipcMain, net, protocol } from 'electron';
import { createWindow, quit } from './create-window';
import { setEnv } from './set-env';
import { initialize } from '@electron/remote/main';

setEnv();

initialize();

app.on('window-all-closed', () => {
  quit();
});

app.whenReady().then(async () => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  const MY_SECURE_PROTOCOL = 'secure-protocol';
  protocol.handle(MY_SECURE_PROTOCOL, (request) => {
    return net.fetch(
      `file:///${request.url.slice(`${MY_SECURE_PROTOCOL}:///`.length)}`,
    );
  });
});

ipcMain.on('message', (event, message) => {
  console.log(`I, Electron, received this message: '${message}'`); // ! This logs on the server, not on the browser
  event.returnValue = `Hello there! This is Electron speaking. I just received your message: '${message}'`;
});
