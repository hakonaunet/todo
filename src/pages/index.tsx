import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState } from "react";
import "./index.module.css"


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const text = "Halla balla e like kuk"
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
};
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <>ibnnj</>
      <br />
      <button>RYKK MÆ</button>
      {text}
      
      <p>neger </p>
      <div>
        <input 
          type="text" 
          name="todo" 
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => setTodo (e.target.value)}
          />
        <button 
          className="add-button"
          onClick={addTodo}>
        Add</button>
      </div>
    </div>
  );
};

export default Home;