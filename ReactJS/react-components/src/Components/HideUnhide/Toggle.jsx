import React, { useState } from 'react';

function ToggleDiv() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#e0e0e0' }}>
          <h2>This is a toggled div!</h2>
          <p>Click the button again to hide this content.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleDiv;
