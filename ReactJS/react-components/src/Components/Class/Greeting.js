import React, {Component} from "react";

class GreetingByClass extends Component{
    render() {
        return <h1>I work for {this.props.company} as {this.props.position}</h1>
    }
}

export default GreetingByClass;