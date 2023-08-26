import { ElectronApi } from './electron-api';

declare global {
  interface Window {
    electronAPI: ElectronApi;
  }
}
