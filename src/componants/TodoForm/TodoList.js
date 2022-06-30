import React, { useEffect, useState } from "react";
import SimpleCard from "../TodoList/SimpleCard";
import { useQuery } from "react-query";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const [todos] = useTodos();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-40">
        <h1 className="text-center text-4xl text-green-500 mb-5 mt-20">
          Your All To-Do List is here
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          {todos?.map((value) => (
            <SimpleCard value={value}></SimpleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;