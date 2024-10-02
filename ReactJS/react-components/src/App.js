import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import GreetingByFunction from './Components/Functions/Greeting';
import GreetingByClass from './Components/Class/Greeting';
import IncDecQty from './Components/Rstate/Cstate';

// Class base first component
class App extends Component {

  constructor(){
    super();
    this.state ={
      age:0  
    }
  }

  myAge(){
    return this.setState({
      age: 27
    })
  }

  componentDidMount(){
    console.log("componentDidMount : When component render first time.")
  }

  render() {
    return (
      <div className="App">
        <GreetingByFunction name="Brijesh Gondaliya" />
        <h1>My age is: {this.state.age}</h1>
        {/* <button onClick={this.myAge.bind(this)}>Know my age?</button> */}

        <button onClick={() => {this.myAge()}}>Know my age?</button>
        <GreetingByClass company="Tops Technologies Pvt. Ltd." position="Sr. Technical Trainers" />
        <IncDecQty />
      </div>
    )
  }
}

// Function base first component
// function App() {
//   return (
//     <div className="App">
//       <GreetingByFunction name="Brijesh Gondaliya"/>
//       <GreetingByClass company="Tops Technologies Pvt. Ltd." position="Sr. Technical Trainers"/>
//       <IncDecQty/>
//     </div>
//   );
// }

export default App;
