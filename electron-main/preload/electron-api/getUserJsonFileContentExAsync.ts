// Unlike the other method that gives the content of a .json file, this one works
// async and ensures that the full path exists. Also, it access a special folder (userData)

import { app } from '@electron/remote';
import fs from 'fs';
import path from 'path';
const getUserJsonFileContentExAsync = (fileName: string, folder: string) => {
  const fullPath = path.join(
    app.getPath('userData'),
    folder,
    `${fileName}.json`,
  );
  console.log(`Full path requested: '${fullPath}'`);

  const DEFAULT_CONTENT = '{"info":"created automatically"}';

  const exists = fs.existsSync(fullPath);
  if (!exists) {
    console.log(`The file '${fullPath}' does not exist!!!`);
    const folderPath = path.join(app.getPath('userData'), folder);
    if (!fs.existsSync(folderPath)) {
      console.log(`The folder '${folderPath}' does not exist!!!`);
      fs.mkdir(folderPath, (err) => {
        if (err) {
          alert('An error ocurred creating the folder :' + err.message);
          return;
        }
      });
      console.log(`The folder '${folderPath}' was created`);
    }
    fs.writeFile(fullPath, DEFAULT_CONTENT, (err) => {
      if (err) {
        alert('An error ocurred creating the file :' + err.message);
        return;
      }
      console.log(`The file '${fullPath}' was created`);
    });
    return DEFAULT_CONTENT;
  }
  let fileContent = DEFAULT_CONTENT;
  console.log(`The file '${fullPath}' exists. Reading content now.`);
  fs.readFile(fullPath, 'utf-8', (err, data) => {
    fileContent = data;
    if (err) {
      alert('An error ocurred reading the file :' + err.message);
      return;
    }
    console.log('The file content is : ' + data);
  });
  return fileContent;
};

export { getUserJsonFileContentExAsync };
