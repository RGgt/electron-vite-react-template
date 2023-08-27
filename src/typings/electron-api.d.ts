/**
 * Should match electron/preload.ts for typescript support in renderer
 */
export default interface ElectronApi {
  sendTextMessage: (message: string) => string;
  getJsonFileContent: (fileName: string) => string;
  getUserJsonFileContentExAsync: (fileName: string, folder: string) => string;
}
