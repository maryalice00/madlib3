// Madlib.js

import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';
import './Madlib.css'; // Import the CSS file

const Madlib = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (formData) => {
    setFormData(formData);
  };

  const handleRestart = () => {
    setFormData(null);
  };

  return (
    <div>
      <h1>React Madlibs</h1>
      {!formData ? (
        <MadlibForm onSubmit={handleFormSubmit} />
      ) : (
        <MadlibStory formData={formData} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Madlib;