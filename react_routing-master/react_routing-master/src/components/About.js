import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';


const About = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.about}>
      <h2>About Us</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default About;
