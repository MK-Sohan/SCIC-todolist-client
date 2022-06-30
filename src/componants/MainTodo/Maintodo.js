import React from "react";
import useTodos from "../hooks/useTodos";
import SingleMaintodos from "./SingleMaintodos";

const Maintodo = () => {
  const [todos] = useTodos();
  return (
    <div className="p-2 lg:h-screen">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl text-gray-600 font-bold mb-5 mt-20">
          Your All To-Do List is here
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          {todos?.map((value) => (
            <SingleMaintodos value={value}></SingleMaintodos>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintodo;
