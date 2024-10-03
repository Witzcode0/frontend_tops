import React from "react";

function MainFocusBlur() {
    function handleFocus() {
        console.log('Input is focused');
    }

    function handleBlur() {
        console.log('Input lost focus');
    }

    return (
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    );
}

export default MainFocusBlur;
