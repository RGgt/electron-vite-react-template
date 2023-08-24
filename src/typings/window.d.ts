import { ElectronApi } from './electron';

declare global {
  interface Window {
    electronAPI: ElectronApi;
  }
}
