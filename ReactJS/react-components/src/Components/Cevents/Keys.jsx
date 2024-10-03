import React from "react";


function MainKeys() {
    function handleKeyPress(event) {
        console.log(`Key pressed and released: ${event.key}`);
    }

    function handleKeyDown(event) {
        console.log(`Key down: ${event.key}`);
    }

    function handleKeyUp(event) {
        console.log(`Key up: ${event.key}`);
    }

    return (
        <input 
            type="text" 
            onKeyPress={handleKeyPress} 
            onKeyDown={handleKeyDown} 
            onKeyUp={handleKeyUp}
        />
    );
}

export default MainKeys;
