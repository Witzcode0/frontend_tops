import React from 'react';

function MainScroll() {
    const handleScroll = () => alert('You scrolled!');

    return (
        <div
            onScroll={handleScroll}
            style={{ width: '100%', height: '200px', overflowY: 'scroll', border: '1px solid #000' }}
        >
            <p style={{ height: '400px' }}>Scroll inside this box.</p>
        </div>
    );
}

export default MainScroll;
