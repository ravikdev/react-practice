// Contact.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'

const Contact = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Contact;
