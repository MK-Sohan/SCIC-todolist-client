import React, { useEffect, useState } from "react";
import SimpleCard from "../TodoList/SimpleCard";

import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const [todos] = useTodos();

  return (
    <>
      {todos ? (
        <div>
          <div className="flex flex-col justify-center items-center mb-40">
            <h1 className="text-center text-4xl text-gray-600 mb-5 font-bold mt-20">
              Your All To-Do List
            </h1>
            <div className="grid grid-cols-1 gap-5  lg:grid-cols-4 ">
              {todos?.map((value) => (
                <SimpleCard value={value}></SimpleCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-black text-3xl text-center mt-20">Processing</p>
      )}
    </>
  );
};

export default TodoList;
