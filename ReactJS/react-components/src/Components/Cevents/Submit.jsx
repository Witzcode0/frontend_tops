import React from "react";

function MainSubmit() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter text" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MainSubmit;