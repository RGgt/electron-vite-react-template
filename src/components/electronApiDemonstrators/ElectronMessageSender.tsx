import './ElectronMessageSender.css';
import { useState } from 'react';

function ElectronMessageSender() {
  const [messageToElectron, setMessageToElectron] = useState('Hi, Electron!');
  const [responseFromElectron, setResponseFromElectron] = useState('');

  const onClickOnTestSendMessage = async () => {
    const response =
      await window.electronAPI.sendTextMessage(messageToElectron);
    console.log(response);
    setResponseFromElectron(response);
  };

  return (
    <div className="messageDemonstrator">
      <h2>Sending text messages to Electron</h2>
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
      <br />
      {responseFromElectron && responseFromElectron.trim() !== '' && (
        <label>
          Electron's reply:
          <blockquote>{responseFromElectron} </blockquote>
        </label>
      )}
    </div>
  );
}
export { ElectronMessageSender };
