import React from "react";
import PropTypes from "prop-types";

// function Greeting(props) {
//     return "Greetings"
// }

function Greeting({name, age}){
    return <h1>Hello, my name is {name} and I am {age} years old.</h1>
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

function MainPropsPropTypes(){
    return (
        <div>
            <Greeting name="John Doe" age={30} />
            <Greeting name="Jane Smith" age={28} />
        </div>
    )
}

export default MainPropsPropTypes;