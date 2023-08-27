// Like ImageView, but more secure. It is using a custom protocol
// for file reading.
// Note! Depending on the type of application, this effort may be
// pointless.

import { useState } from 'react';
import './ImageSecureView.css';
import default_image from './../assets/img/image.jpg';

function ImageSecureView() {
  const addProtocolToPath = (path: string, useCustomProtocol: boolean) => {
    if (!useCustomProtocol) return path;
    const MY_SECURE_PROTOCOL = 'secure-protocol';
    return `${MY_SECURE_PROTOCOL}:///` + path;
  };
  // const IMAGE_SRC__DEFAULT = `${MY_SECURE_PROTOCOL}:///` + default_image;

  const IMAGE_SRC__DEFAULT = addProtocolToPath(default_image, false);
  const [imageSrc, setImageSrc] = useState(IMAGE_SRC__DEFAULT);
  const onClick = async () => {
    const filenames = await window.electronAPI.showOpenFileDialog(
      '==> PICK A FILE <==',
      [
        {
          name: 'images',
          extensions: ['jpg'],
        },
        {
          name: 'common image files',
          extensions: ['jpg', 'jpeg', 'bmp', 'png', 'gif', 'webp', 'apng'],
        },
      ],
    );
    if (filenames && filenames.length == 1) {
      console.log(`file requested: ${filenames}`);
      setImageSrc(addProtocolToPath(filenames[0], true));
    }
  };

  return (
    <div>
      <img src={imageSrc} className="imageView" />
      <div className="secure-mark">
        SECURE <br />
        <i>but using dummy protocol</i>
      </div>
      <button onClick={onClick} className="main-button">
        Select image file
      </button>
    </div>
  );
}
export { ImageSecureView };
