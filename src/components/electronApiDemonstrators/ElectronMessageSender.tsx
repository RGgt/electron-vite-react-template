import { useState } from 'react';

function ElectronMessageSender() {
  const [messageToElectron, setMessageToElectron] = useState('Hi, Electron!');

  const onClickOnTestSendMessage = async () => {
    const response =
      await window.electronAPI.sendTextMessage(messageToElectron);
    console.log(response);
  };

  return (
    <div>
      <label>
        Your message to Electron:
        <input
          name="messageToElectron"
          value={messageToElectron}
          onChange={(e) => setMessageToElectron(e.target.value)}
        />
      </label>
      <button onClick={onClickOnTestSendMessage}>
        Send message to Electron
      </button>
    </div>
  );
}
export { ElectronMessageSender };
