/**
 * Should match electron/preload.ts for typescript support in renderer
 */
export default interface ElectronApi {
  sendTextMessage: (message: string) => void;
}
