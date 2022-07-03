import React, { useEffect, useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://infinite-spire-80356.herokuapp.com/todoList")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos]);
  return [todos, setTodos, loading, setLoading];
};

export default useTodos;
