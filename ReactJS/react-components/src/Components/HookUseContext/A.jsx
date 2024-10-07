import React from "react";
import IndexTwo from "./B";

export const myContext = React.createContext();

class IndexOne extends React.Component {
  render() {
    const contextValue = {
      name: 'Brijesh Gondaliya',
      age: 28,
      location: 'Surat'
    };

    return (
      <div>
        <h1>How to use the useContext method in React?</h1>
        <h3>Welcome to Index One</h3>
        <myContext.Provider value={contextValue}>
          <IndexTwo />
        </myContext.Provider>
      </div>
    );
  }
}

export default IndexOne;
