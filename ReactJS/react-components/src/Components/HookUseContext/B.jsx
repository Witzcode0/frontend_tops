import React, { Component } from "react";
import C from "./C";

class B extends Component {

    render() {

        return (
            <div>
                <h1>Component B</h1>
                <p>This is a child component of Component A.</p>

                {/* <C name={this.state.name} age={this.state.age} /> */}

            </div>
        );
    }
};

export default B;