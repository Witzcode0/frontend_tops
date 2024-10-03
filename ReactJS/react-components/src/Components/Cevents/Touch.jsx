import React, { useState } from 'react';

function MainTouch() {
    const [touchStatus, setTouchStatus] = useState('Touch me!');

    const handleTouchStart = () => setTouchStatus('Touch started!');
    const handleTouchEnd = () => setTouchStatus('Touch ended!');

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ width: '200px', height: '200px', backgroundColor: '#ffeb3b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            {touchStatus}
        </div>
    );
}

export default MainTouch;
