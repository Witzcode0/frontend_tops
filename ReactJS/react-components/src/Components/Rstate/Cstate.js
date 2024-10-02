import React, {useEffect, useState} from "react";

const IncDecQty = () => {

    // syntax: const [state, setState] = useState(initialState)
    const [qty, setQty] = useState(0);

    function incrementQty(){
       return setQty(qty+1);
    }

    function decrementQty(){
        return setQty(qty-1);
    }

    // syntax:  useEffect(setup, dependencies?)
    useEffect( () => {
        if (qty < 0){
            alert('Quantity cannot be negative!');
            setQty(0); // Reset to zero if qty becomes negative
        }
    }, [qty])

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button onClick={incrementQty}>+</button>
            <h1 style={{margin: "0px 10px"}}>{qty}</h1>
            <button onClick={decrementQty}>-</button>

        </div>
    )
}

export default IncDecQty