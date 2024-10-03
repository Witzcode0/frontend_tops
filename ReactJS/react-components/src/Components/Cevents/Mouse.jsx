import React from "react";

function MainMouse() {
    function handleMouseOver() {
        console.log('Mouse is over the element');
    }

    function handleMouseOut() {
        console.log('Mouse left the element');
    }
    

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            First Open Console : <strong>"Hover over this text"</strong>
        </div>
    );
}

export default MainMouse;
