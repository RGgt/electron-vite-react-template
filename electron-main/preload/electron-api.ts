import { contextBridge, ipcRenderer } from 'electron';

function setup() {
  contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message: string) => ipcRenderer.send('message', message),
  });
}

export { setup };
