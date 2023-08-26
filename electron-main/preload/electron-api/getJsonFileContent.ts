import fs from 'fs';
const getJsonFileContent = (fileName: string) => {
  console.log(`Client app requested to get the content of '${fileName}'!`);
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Server retrieved the content of '${fileName}'`);
    console.log(`Content of '${fileName}' is: ${data}`);
    return data;
  });
};

export { getJsonFileContent };
