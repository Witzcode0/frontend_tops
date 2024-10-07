import React, { Component } from "react";
import B from "./B";

class A extends Component {

    state = {
        name:"Brijesh Gondaliya",
        age:25
    }

  render() {
    return (
      <div>
        <h1>Component A</h1>
        <p>My name is: {this.state.name}</p>
        <p>I am {this.state.age} years old</p>
        <B name={this.state.name} age={this.state.age} />

      </div>
    );
  }
}


export default A