import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {

  const todoItems  = [
    {
      id: 1,
      name: "Brijesh",
      date: "4/12/2020"
    },
    {
      id: 2,
      name: "jay",
      date: "4/12/2020"
    },
    {
      id: 3,
      name: "John",
      date: "4/12/2020"
    }
  ];

  return (
    <center className="container todo-container">
      <AppName />
      <AddTodo />
      <TodoItems items={todoItems}></TodoItems>
    </center>
  );
}

export default App;
