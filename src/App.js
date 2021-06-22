import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/Todoitem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const App = () => {

  const todoList = useSelector(selectTodoList)
  
  return (
    <div className="App">
      <div className="App_container">
        <div className="App_todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
