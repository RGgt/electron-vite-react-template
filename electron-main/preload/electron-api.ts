import { contextBridge } from 'electron';
import { sendTextMessageToElectron } from './electron-api/sendTextMessageToElectron';
import { getJsonFileContent } from './electron-api/getJsonFileContent';
import { getUserJsonFileContentExAsync } from './electron-api/getUserJsonFileContentExAsync';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendTextMessage: (message: string) => sendTextMessageToElectron(message),
    getJsonFileContent: (fileName: string) => getJsonFileContent(fileName),
    getUserJsonFileContentExAsync: (fileName: string, folder: string) =>
      getUserJsonFileContentExAsync(fileName, folder),
  });
}

export { setup };
