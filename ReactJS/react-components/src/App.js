import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import GreetingByFunction from './Components/Functions/Greeting';
import GreetingByClass from './Components/Class/Greeting';
import { IncDecQty, ShowAge } from './Components/Rstate/Cstate';

// Class base first component
class App extends Component {
  componentDidMount(){
    console.log("componentDidMount : When component render first time.")
  }

  render() {
    return (
      <div className="App">
        <GreetingByFunction name="Brijesh Gondaliya" />
        <ShowAge />
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
