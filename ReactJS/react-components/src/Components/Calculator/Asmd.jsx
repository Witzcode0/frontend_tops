import React from "react";

function CalC(){
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const addNumbers = () => {
        setResult(num1 + num2);
    }

    const subtractNumbers = () => {
        setResult(num1 - num2);
    }

    const multiplyNumbers = () => {
        setResult(num1 * num2);
    }

    const divideNumbers = () => {
        if(num2!==0){
            setResult(num1 / num2);
        } else {
            alert("Cannot divide by zero!");
        }
    }

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={addNumbers}>+</button>
            <button onClick={subtractNumbers}>-</button>
            <button onClick={multiplyNumbers}>*</button>
            <button onClick={divideNumbers}>/</button>
            <h2>Result: {result}</h2>
        </div>
    );
}

export default CalC;