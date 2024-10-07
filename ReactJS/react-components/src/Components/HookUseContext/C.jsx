import React, { Component } from "react";

class C extends Component {

    render() {
        return (
            <div>
                <h1>Component C
                </h1>
                <p>This is a child component of Component B.</p>
                {this.state.name}
                {this.state.age}
            </div>
        );
    }

};

export default C;