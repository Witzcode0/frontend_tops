import React from "react";

function MainChange() {
    const [inputValue, setInputValue] = React.useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <p>You have entered: {inputValue}</p>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Enter something" 
                style={{ border: 'none' }} // Remove the border
            />
        </div>
    );
}

export default MainChange;
