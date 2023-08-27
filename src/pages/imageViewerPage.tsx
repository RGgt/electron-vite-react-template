import { ImageView } from '../components/ImageView';

function ImageViewerPage() {
  return (
    <>
      <h1>Image viewer</h1>
      <p>
        This is a simple image viewer that works with the default protocol,
        <code> file:// </code>. It is not a secure solution, but is very quick
        to implement and very easy to use.
      </p>
      <p>
        Being an unsafe approach, it has a number of drawbacks. For example, the
        image won't load unless you set <code> webSecurity: false </code> when
        creating the browser window.
      </p>
      <p>
        <i>
          At the time I am writing this, Electron only restricts loading of the
          image while debugging, still allowing it to be loaded after publish.
        </i>
      </p>
      <p>
        <i>
          Please note that setting <code> webSecurity: false </code>
          <strong> turns all web security off</strong>, not only the part
          regarding loading images.
        </i>
      </p>
      <ImageView></ImageView>
    </>
  );
}

export { ImageViewerPage };
