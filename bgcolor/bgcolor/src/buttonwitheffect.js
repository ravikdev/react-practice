import React, { useEffect, useState } from 'react';
import './index.css';

const ButtonWithEffect = () => {
  const [buttonColor, setButtonColor] = useState('blue');

  useEffect(() => {
    console.log('This effect runs only on the first render');
  }, []);

  const handleButtonClick = () => {
    // Generate a random color for the button
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  };

  return (
    <div className="button-container">
      <button style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonWithEffect;