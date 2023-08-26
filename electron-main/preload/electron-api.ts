import { contextBridge } from 'electron';
import { sendTextMessageToElectron } from './electron-api/sendMessageToElectron';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message: string) => sendTextMessageToElectron(message),
  });
}

export { setup };
