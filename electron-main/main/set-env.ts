import { app } from 'electron';
import path from 'path';

function setEnv() {
  const FROM_HERE_TO_ROOT = '../../'; // PARENT OF DIST-ELECTRON, DIST-RENDERER and ELECTRON_RESOURCES
  const FOLDER_NAME__DIST_RENDERER = 'dist-renderer';
  const FOLDER_NAME__ELECTRON_RESOURCES = 'public';
  const FOLDER_NAME__PROJECT_ROOT = path.join(__dirname, FROM_HERE_TO_ROOT);
  process.env.DIST = path.join(
    FOLDER_NAME__PROJECT_ROOT,
    FOLDER_NAME__DIST_RENDERER,
  );
  process.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(FOLDER_NAME__PROJECT_ROOT, FOLDER_NAME__ELECTRON_RESOURCES);
}
export { setEnv };
