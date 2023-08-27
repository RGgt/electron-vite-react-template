import { useState } from 'react';
import './App.css';
import { ImageView } from './components/ImageView';
import { ImageSecureView } from './components/ImageSecureView';

function App() {
  const [count, setCount] = useState(0);
  const onClick = async () => {
    console.log('clicked');
    setCount((count) => count + 1);
    window.electronAPI.sendTextMessage('server_notified:clicked');
    const filenames = await window.electronAPI.showOpenFileDialog(
      '==> PICK A FILE <==',
      [
        {
          name: 'images',
          extensions: ['jpg'],
        },
      ],
    );
    filenames &&
      console.log(`${filenames.length} files requested: ${filenames}`);
    // window.electronAPI.getJsonFileContent('c:\\__temp\\sample.json');
    window.electronAPI.getUserJsonFileContentExAsync(
      'sample',
      'electron-template-project',
    );
  };

  return (
    <>
      <h1>Vite + React</h1>
      <ImageSecureView></ImageSecureView>
      <ImageView></ImageView>
      <div className="card">
        <button onClick={onClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
