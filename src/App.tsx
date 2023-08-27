import './App.css';
import { ImageView } from './components/ImageView';
import { ImageSecureView } from './components/ImageSecureView';
import { ClicksCounter } from './components/ClicksCounter';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ImageSecureView></ImageSecureView>
      <ImageView></ImageView>
      <div className="card">
        <ClicksCounter></ClicksCounter>
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
