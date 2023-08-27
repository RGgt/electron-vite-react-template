import { ElectronFilePicker } from '../components/electronApiDemonstrators/ElectronFilePicker';
import { ElectronGetFileContent } from '../components/electronApiDemonstrators/ElectronGetFileContent';
import { ElectronMessageSender } from '../components/electronApiDemonstrators/ElectronMessageSender';

function DemonstratorsPage() {
  return (
    <>
      <h1>Demonstrators</h1>
      <ElectronMessageSender></ElectronMessageSender>
      <ElectronFilePicker></ElectronFilePicker>
      <ElectronGetFileContent></ElectronGetFileContent>
    </>
  );
}

export { DemonstratorsPage };
