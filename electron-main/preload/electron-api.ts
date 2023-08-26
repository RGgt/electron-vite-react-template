import { contextBridge } from 'electron';
import { sendTextMessageToElectron } from './electron-api/sendTextMessageToElectron';
import { getJsonFileContent } from './electron-api/getJsonFileContent';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendTextMessage: (message: string) => sendTextMessageToElectron(message),
    getJsonFileContent: (fileName: string) => getJsonFileContent(fileName),
  });
}

export { setup };
