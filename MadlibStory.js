// MadlibStory.js

import React from 'react';

const MadlibStory = ({ formData, onRestart }) => {
  const { noun, adjective, verb } = formData;

  return (
    <div>
      <p>
        Once upon a time, there was a {adjective} {noun} who loved to {verb} all day long. The end.
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default MadlibStory;