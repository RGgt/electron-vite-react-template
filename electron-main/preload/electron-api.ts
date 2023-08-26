import { contextBridge } from 'electron';
import { sendTextMessageToElectron } from './electron-api/sendTextMessageToElectron';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendTextMessage: (message: string) => sendTextMessageToElectron(message),
  });
}

export { setup };
