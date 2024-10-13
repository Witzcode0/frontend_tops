import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  return (
    <center className="container todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItems />
      </div>
    </center>
  );
}

export default App;
