import { ImageSecureView } from '../components/ImageSecureView';

function ImageSecureViewerPage() {
  return (
    <>
      <h1>Secure image viewer</h1>
      <p>
        This image viewer uses a custom protocol (instead of the default
        <code> file:// </code> protocol), therefore bypassing the need to turn
        off web security.
      </p>
      <p>
        Using a custom protocol makes this solution more complex and requires
        more attention than the classical solution, when it comes to loading
        files. Certain pre-build third-party components may require signifiant
        changes in order to work with a custom file protocol.
      </p>
      <p>
        The idea of having to use a custom protocol is that you are at least
        aware that there are potential security concerns and implement some
        validations and safeguards in your protocol.
      </p>
      <p>
        Having a custom protocol and zero security, as my code in this project
        template, defeats most of the purpose of having a custom file protocol.
      </p>
      <ImageSecureView></ImageSecureView>
    </>
  );
}

export { ImageSecureViewerPage };
