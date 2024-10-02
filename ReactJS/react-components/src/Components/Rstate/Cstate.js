import React, { useEffect, useState, Component } from "react";

const IncDecQty = () => {
  const [qty, setQty] = useState(0);

  function incrementQty() {
    return setQty(qty + 1);
  }

  function decrementQty() {
    return setQty(qty - 1);
  }

  useEffect(
    () => {
      if (qty < 0) {
        alert("Quantity cannot be negative!");
        setQty(0);
      }
    },
    [qty]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <button onClick={incrementQty}>+</button>
      <h1 style={{ margin: "0px 10px" }}>
        {qty}
      </h1>
      <button onClick={decrementQty}>-</button>
    </div>
  );
};

class ShowAge extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevState.age !== this.state.age) {
      console.log(
        `componentDidUpdate : The age has been updated to: ${this.state.age}`
      );
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount : Component is about to be unmounted.");
  }
  constructor(props) {
    super(props);
    this.state = {
      age: null
    };
  }

  myAge = () => {
    this.setState({ age: 25 });
  };

  render() {
    return (
      <div>
        <h1>
          My age is: {this.state.age !== null ? this.state.age : "Unknown"}
        </h1>
        <button onClick={this.myAge}>Know my age?</button>
      </div>
    );
  }
}

export { IncDecQty, ShowAge };
