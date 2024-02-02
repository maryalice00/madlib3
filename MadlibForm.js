// MadlibForm.js

import React, { useState } from 'react';

const MadlibForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    noun: '',
    adjective: '',
    verb: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled before submitting
    if (formData.noun && formData.adjective && formData.verb) {
      onSubmit(formData);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input type="text" name="noun" value={formData.noun} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Adjective:
        <input type="text" name="adjective" value={formData.adjective} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Verb:
        <input type="text" name="verb" value={formData.verb} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Generate Madlib</button>
    </form>
  );
};

export default MadlibForm;