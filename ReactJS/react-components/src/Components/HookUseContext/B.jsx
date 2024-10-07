import React from "react";
import { myContext } from "./A";

class IndexTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Index Two Component</h1>
        <myContext.Consumer>
          {
            (value) => (
              <div>
                <p>Name: {value.name}</p>
                <p>Age: {value.age}</p>
              </div>
            )
          }
        </myContext.Consumer>
      </div>
    );
  }
}

export default IndexTwo;
