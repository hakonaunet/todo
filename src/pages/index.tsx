import { type NextPage } from "next";
import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import "./index.module.css";


const Home: NextPage = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }}
  const deleteTodo = (text:string) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default Home;