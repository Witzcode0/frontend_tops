import React, { useState } from 'react';

function MainDragDrop() {
    const [dragStatus, setDragStatus] = useState('Drop something here!');

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragStatus('Ready to drop...');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragStatus('Item dropped!');
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{ width: '200px', height: '200px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            {dragStatus}
        </div>
    );
}

export default MainDragDrop;
