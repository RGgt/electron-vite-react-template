import './shared.css';
import './ElectronGetFileContent.css';
import { useState } from 'react';

function ElectronGetFileContent() {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  const onClick = async () => {
    const response = await window.electronAPI.getJsonFileContent(fileName);
    console.log(`file content: ${response}`);
    setFileContent(response);
  };

  return (
    <div className="demonstrator">
      <h2>Getting text files content</h2>
      <label>
        Filename:
        <input
          className="fileNameInputField"
          name="fileName"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </label>{' '}
      <br />
      <button onClick={onClick}>Ask Electron for file content</button>
      <br />
      {fileContent && fileContent.trim() !== '' && (
        <label>
          File content:
          <textarea value={fileContent} rows={12} cols={80} />
        </label>
      )}
    </div>
  );
}
export { ElectronGetFileContent };
