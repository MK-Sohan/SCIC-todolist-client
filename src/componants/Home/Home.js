import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoForm/TodoList";
import "./home.css";
const Home = () => {
  return (
    <div className="  h-auto p-10 bg-slate-200 home   ">
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};

export default Home;
