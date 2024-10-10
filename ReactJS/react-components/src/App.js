import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import GreetingByFunction from './Components/Functions/Greeting';
import GreetingByClass from './Components/Class/Greeting';
import { IncDecQty, ShowAge } from './Components/Rstate/Cstate';
import  Maincontent  from './Components/Cui/Cmulti';
import AllEvents from './Components/Cevents/Cmainevents'
import CalC from './Components/Calculator/Asmd';
import ToggleDiv from './Components/HideUnhide/Toggle';
import MainPropsPropTypes from './Components/PropsPropType/Greeting';
import ArrayUpdater from './Components/UpdateArrayInState/main';
import Posts from './Components/ApiToTable/main';
import MainUseReactRef from './Components/UseReactRef/main';
import IndexOne from './Components/HookUseContext/A';
import MainReducerHook from './Components/UseReducerHook/main';
import MainCallbackMemo from './Components/UseCallbackMemoHook/main';
import MainForm from './Components/FormData/main';
import TaskManager from './Components/CRUDWithArray/main';



// Class base first component
class App extends Component {
  componentDidMount(){
    console.log("componentDidMount : When component render first time.")
  }

  render() {
    return (
      <div className="App">
        {/* <GreetingByFunction name="Brijesh Gondaliya" /> */}
        {/* <ShowAge /> */}
        {/* <GreetingByClass company="Tops Technologies Pvt. Ltd." position="Sr. Technical Trainers" /> */}
        {/* <IncDecQty /> */}

        {/* <Maincontent/> */}

        {/* <AllEvents/> */}

        {/* <CalC/> */}

        {/* <ToggleDiv /> */}

        {/* <MainPropsPropTypes/> */}

         {/* <ArrayUpdater/> */}
         
         {/* <Posts/> */}

         {/* <MainUseReactRef /> */}

         {/* <IndexOne /> */}
         
         {/* <MainReducerHook /> */}

         {/* <MainCallbackMemo /> */}

         {/* <MainForm /> */}

         <TaskManager />

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
