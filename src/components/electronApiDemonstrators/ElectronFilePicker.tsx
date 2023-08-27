import './shared.css';
import { useState } from 'react';

function ElectronFilePicker() {
  const [fileName, setFileName] = useState('');
  const onClick = async () => {
    const filenames = await window.electronAPI.showOpenFileDialog(
      '==> PICK A FILE <==',
      [
        {
          name: 'all files',
          extensions: ['*'],
        },
        {
          name: 'json files',
          extensions: ['json'],
        },
        {
          name: 'common text files',
          extensions: ['json', 'txt', 'js', 'ts', 'jsx', 'tsx', 'css', 'md'],
        },
        {
          name: 'common image files',
          extensions: [
            'jpg',
            'jpeg',
            'bmp',
            'png',
            'gif',
            'webp',
            'apng',
            'webm',
          ],
        },
      ],
    );
    if (filenames && filenames.length == 1) {
      console.log(`file requested: ${filenames}`);
      setFileName(filenames[0]);
      return;
    }
    setFileName('');
  };

  return (
    <div className="demonstrator">
      <h2>Showing 'Open File' dialog</h2>
      <button onClick={onClick}>Pick a file</button>
      <br />
      {fileName && fileName.trim() !== '' && (
        <label>
          File picked:
          <blockquote>{fileName} </blockquote>
        </label>
      )}
    </div>
  );
}
export { ElectronFilePicker };
