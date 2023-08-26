import { ipcRenderer } from 'electron';

const sendTextMessageToElectron = (message: string) => {
  return ipcRenderer.send('message', message);
};
export { sendTextMessageToElectron };
