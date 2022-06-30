import React from "react";
import { useQuery } from "react-query";
import SingleCheckedtodo from "./SingleCheckedtodo";
const CompletedTasks = () => {
  const { data: checkedtodo, isLoading } = useQuery("checked", () =>
    fetch("http://localhost:5000/completedTasks").then((res) => res.json())
  );

  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl text-green-500 mb-5 mt-20">
            Your Completed Tasks List is here
          </h1>
          <div className="grid grid-cols-1  lg:grid-cols-4 ">
            {checkedtodo?.map((value) => (
              <SingleCheckedtodo value={value}></SingleCheckedtodo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
