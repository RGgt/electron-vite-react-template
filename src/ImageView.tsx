import { useState } from 'react';

function ImageView() {
  const IMAGE_SRC__DEFAULT = 'c:\\__temp\\image.jpg';
  const [imageSrc, setImageSrc] = useState(IMAGE_SRC__DEFAULT);
  const onClick = async () => {
    console.log('ImageView.onClick.begin');

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
      setImageSrc(filenames[0]);
    }
    console.log(window);

    console.log('ImageView.onClick.end');
  };

  return (
    <div>
      Image View here
      <img src={imageSrc} />
      <button onClick={onClick}>Default</button>
    </div>
  );
}
export { ImageView };
