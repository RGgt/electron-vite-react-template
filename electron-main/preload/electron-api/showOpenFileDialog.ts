import { dialog } from '@electron/remote';

const showOpenFileDialog = async (
  windowTitle: string,
  filters: Electron.FileFilter[] | undefined,
) => {
  const response = await dialog.showOpenDialog({
    title: windowTitle,
    filters,
    properties: ['openFile', 'multiSelections'],
  });
  return response.filePaths;
};

export { showOpenFileDialog };
