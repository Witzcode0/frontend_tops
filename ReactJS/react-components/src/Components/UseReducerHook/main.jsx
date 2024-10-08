import React, { useReducer } from "react";

const initState = 0;

const reducer = (state, action) => {
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state
    }
    
}

function MainReducerHook() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <button onClick={() => dispatch('Increment')}>+ </button> {count}&nbsp;
            <button onClick={() =>dispatch('Decrement')}> -</button>
        </div>
    )
};

export default MainReducerHook