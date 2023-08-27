import { useState } from 'react';
import './ImageView.css';
import default_image from './../assets/img/image.jpg';

function ImageView() {
  // console.log(logo);
  const IMAGE_SRC__DEFAULT = default_image;
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
      <img src={imageSrc} className="imageView" />
      <br />
      <button onClick={onClick} className="main-button">
        Select image file
      </button>
    </div>
  );
}
export { ImageView };
