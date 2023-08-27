import { useState } from 'react';

function ClicksCounter() {
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
    <div>
      <button onClick={onClick}>count is {count}</button>
    </div>
  );
}
export { ClicksCounter };
