// Like ImageView, but more secure. It is using a custom protocol
// for file reading.
// Note! Depending on the type of application, this effort may be
// pointless.

import { useState } from 'react';

function ImageSecureView() {
  const MY_SECURE_PROTOCOL = 'secure-protocol';
  const IMAGE_SRC__DEFAULT =
    `${MY_SECURE_PROTOCOL}:///` + 'c:\\__temp\\image.jpg';
  const [imageSrc, setImageSrc] = useState(IMAGE_SRC__DEFAULT);
  const onClick = async () => {
    const filenames = await window.electronAPI.showOpenFileDialog(
      '==> PICK A FILE <==',
      [
        {
          name: 'images',
          extensions: ['jpg'],
        },
      ],
    );
    if (filenames && filenames.length == 1) {
      console.log(`file requested: ${filenames}`);
      setImageSrc(`${MY_SECURE_PROTOCOL}:///` + filenames[0]);
    }
  };

  return (
    <div>
      Image SECURE View here
      <img src={imageSrc} />
      <button onClick={onClick}>Default</button>
    </div>
  );
}
export { ImageSecureView };
