import fs from 'fs';
const getJsonFileContent = async (fileName: string) => {
  console.log(`Client app requested to get the content of '${fileName}'!`);
  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    console.log(`Content of '${fileName}' is: ${fileContent}`);
    return fileContent;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { getJsonFileContent };
