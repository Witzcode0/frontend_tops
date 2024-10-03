import React from "react";

function MainChange() {
    const [inputValue, setInputValue] = React.useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <p>You have enterd: {inputValue}</p>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter something " />
        </div>
    );
}

export default MainChange;
