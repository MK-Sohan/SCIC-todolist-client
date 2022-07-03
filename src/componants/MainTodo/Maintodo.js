import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import DeleteModal from "./DeleteModal";
import SingleMaintodos from "./SingleMaintodos";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
const Maintodo = () => {
  // const [todos] = useTodos();

  const [deletetodo, setDeletetodo] = useState(null);
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://infinite-spire-80356.herokuapp.com/todoList")
  //     .then((res) => res.json())
  //     .then((data) => setTodos(data));
  // }, [todos]);
  const {
    data: todos,
    isLoading,
    refetch,
  } = useQuery("todo", () =>
    fetch("https://infinite-spire-80356.herokuapp.com/todoList").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" p-2 lg:h-auto lg:p-20  ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl  text-gray-600 font-bold mb-5 mt-20">
          Your Uncomplete To-Do List
        </h1>

        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          {todos?.map((value) => (
            <SingleMaintodos
              value={value}
              setDeletetodo={setDeletetodo}
              refetch={refetch}
            ></SingleMaintodos>
          ))}
        </div>
      </div>
      <DeleteModal deletetodo={deletetodo} refetch={refetch}></DeleteModal>
    </div>
  );
};

export default Maintodo;
