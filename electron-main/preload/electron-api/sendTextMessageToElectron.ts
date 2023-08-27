import { ipcRenderer } from 'electron';

const sendTextMessageToElectron = async (message: string) => {
  return ipcRenderer.sendSync('message', message);
};
export { sendTextMessageToElectron };
