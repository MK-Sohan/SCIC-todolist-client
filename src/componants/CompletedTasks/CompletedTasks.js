import React from "react";
import { useQuery } from "react-query";
import SingleCheckedtodo from "./SingleCheckedtodo";
const CompletedTasks = () => {
  const { data: checkedtodo, isLoading } = useQuery("checked", () =>
    fetch("https://infinite-spire-80356.herokuapp.com/completedTasks").then(
      (res) => res.json()
    )
  );

  return (
    <div className="p-2 lg:h-screen ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl text-gray-600 font-bold mb-5 mt-20">
          Your Completed Tasks List is here
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          {checkedtodo?.map((value) => (
            <SingleCheckedtodo value={value}></SingleCheckedtodo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
