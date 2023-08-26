import { contextBridge } from 'electron';
import { sendTextMessageToElectron } from './electron-api/sendMessageToElectron';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendTextMessage: (message: string) => sendTextMessageToElectron(message),
  });
}

export { setup };
