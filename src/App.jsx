import React, { useState, useEffect } from 'react';
import image1 from '../src/assets/image1.jpg';
import image2 from '../src/assets/image2.jpg';
import image3 from '../src/assets/image3.jpg';
import image4 from '../src/assets/image4.jpg';
import image5 from '../src/assets/image5.jpg';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [changingImage, setChangingImage] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const imageUrls = [image1, image2, image3, image4, image5];

  const handleButtonClick = (index) => {
    if (!changingImage) {
      setChangingImage(true);
      setCurrentImageIndex(index);
    }
  };

  const handleRotate = () => {
    const newAngle = rotationAngle + 45;
    setRotationAngle(newAngle >= 360 ? 0 : newAngle);
  };

  useEffect(() => {
    if (changingImage) {
      setTimeout(() => {
        setChangingImage(false);
      }, 500);
    }
  }, [changingImage]);

  return (
    <div className='wrap-container'>
      <div className='top'>
        <div className=''>
          {imageUrls.map((image, index) => (
            <button
              key={index}
              className={`btn button_${index + 1}`}
              onClick={() => handleButtonClick(index)}
            >
              {`Button ${index + 1}`}
            </button>
          ))}
        </div>
        <div className='rotate-button'>
          <button type="button" className='btn' onClick={handleRotate}>
            Rotate
          </button>
        </div>
      </div>
      <div className='middle'>
        <div
          className={`image-container ${changingImage ? 'fade-out' : ''}`}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
          <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
      </div>
      <div className='bottom'>
        <footer className="footer">
          <p>&copy; 2024 </p>
          <p>All right reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
