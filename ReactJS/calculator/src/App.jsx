import "./App.css";
import Screen from "./Components/Screen";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else if (buttonText === "<<") {
      // Implement backspace functionality
      setCalVal(calVal.slice(0, -1));
    }else if (buttonText === "C") {
      setCalVal("");
    } else {
      setCalVal(calVal + buttonText);
    }
  };


  return (
    <div className="main-container">
      <Screen screenVal={calVal} />
      <ButtonsContainer onButtonClick= {onButtonClick} />
    </div>
  );
}

export default App;
